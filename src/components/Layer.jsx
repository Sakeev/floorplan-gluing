import React, { useRef, useEffect } from 'react';

const Layer = ({ layer, index, isVisible, isCurrent }) => {
    const canvasRefs = useRef([React.createRef(), React.createRef()]);
  
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
          images.forEach((image, idx) => {
            const canvas = canvasRefs.current[idx].current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          });
        } catch (error) {
          console.error(error);
        }
      };
  
      drawLayer();
    }, [layer.images]);
  
    return (
      <div style={{
        position: 'absolute',
        top: layer.position.y,
        left: layer.position.x,
        width: layer.size.width,
        height: layer.size.height,
        opacity: isVisible ? (isCurrent ? 1 : layer.opacity) : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}>
        {layer.images.map((_, idx) => (
          <canvas
            key={idx}
            ref={canvasRefs.current[idx]}
            width={layer.size.width}
            height={layer.size.height}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: index
            }}
          />
        ))}
      </div>
    );
  };

export default Layer