import React, { useRef, useEffect, useState } from 'react';

const Layer = ({ layer, index }) => {
  const canvasRef = useRef(null);
  const savedLayerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [startOffset, setStartOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image ${url}`));
      });
    };

    const drawLayer = async () => {
      try {
        const images = await Promise.all(layer.images.map(img => loadImage(img.src)));
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем канвас перед отрисовкой нового этажа

        ctx.save(); // Сохраняем текущее состояние контекста рисования

        // Применяем сдвиг и масштабирование
        ctx.translate(offset.x, offset.y);
        ctx.scale(scale, scale);

        ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle =  layer.opacity ? `rgba(100,90,70, ${layer.opacity})`: 'transparent';
        
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        savedLayerRef.current = canvas.toDataURL();

        for (let i = 1; i < images.length; i++) {
          ctx.globalCompositeOperation = 'source-over';
          ctx.drawImage(images[i], 0, 0, canvas.width, canvas.height);
        }
        
        ctx.restore(); // Восстанавливаем предыдущее состояние контекста рисования

      } catch (error) {
        console.error(error);
      }

    };

    drawLayer();
  }, [layer, scale, offset]);

  const handleWheel = (event) => {
    if (event.ctrlKey) return;
    event.preventDefault();
  
    const delta = event.deltaY;
    const mousePosition = {
      x: event.clientX - canvasRef.current.offsetLeft,
      y: event.clientY - canvasRef.current.offsetTop
    };
  
    const newScale = scale + (delta < 0 ? 0.1 : -0.1);
  
    const minScale = 1;
    const maxScale = 3;
    if (newScale < minScale || newScale > maxScale) return;
  
    // Пересчитываем сдвиг так, чтобы мышь оставалась в центре масштабирования
    const deltaX = (mousePosition.x * (1 - newScale / scale));
    const deltaY = (mousePosition.y * (1 - newScale / scale));
  
    setScale(newScale);
    setOffset({ x: offset.x + deltaX, y: offset.y + deltaY });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setStartPosition({ x: event.clientX, y: event.clientY });
    setStartOffset({ x: offset.x, y: offset.y }); // Сохраняем начальное смещение
  };

  const handleMouseMove = (event) => {
    event.preventDefault();
    if (!isDragging) return;

    const deltaX = event.clientX - startPosition.x;
    const deltaY = event.clientY - startPosition.y;

    setOffset({
      x: startOffset.x + deltaX,
      y: startOffset.y + deltaY
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: `${layer.position.y}%`, // Применяем процентные значения для позиции
        left: `${layer.position.x}%`,
        width: `${layer.size.width}px`, // Применяем процентные значения для размеров
        height: `${layer.size.height}px`,
        opacity: 1,
        transition: 'opacity 1s ease-in-out',
        overflow: 'hidden', // Обрезаем содержимое, которое выходит за пределы
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <canvas
        ref={canvasRef}
        width={layer.size.width}
        height={layer.size.height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: index,
          transition: 'opacity 10s ease-in-out',
        }}
      />
      {savedLayerRef.current && (
        <img
          src={savedLayerRef.current}
          alt="Saved Layer"
          style={{ 
            display: 'none',
           }}
        />
      )}
    </div>
  );
};

export default Layer;
