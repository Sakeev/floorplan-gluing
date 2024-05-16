import React, { useEffect, useRef } from 'react'

const App = () => {

    // const canvasRef = useRef(null)
    // let ctx;
    // const image = new Image(60, 45)
    // image.src = "./images/GF.png"
    // console.log(image);

    // function drawImageActualSize() {
    //     // use the intrinsic size of image in CSS pixels for the canvas element
    //     canvasRef.current.width = this.naturalWidth;
    //     canvasRef.current.height = this.naturalHeight;

    //     // will draw the image as 300x227 ignoring the custom size of 60x45
    //     // given in the constructor
    //     // ctx.drawImage(this, 0, 0);

    //     // To use the custom size we'll have to specify the scale parameters
    //     // using the element's width and height properties - lets draw one
    //     // on top in the corner:
    //     // ctx.drawImage(this, 0, 0, this.width, this.height);

    //   }

    // useEffect(()=>{
    //     if (canvasRef.current) {
    //         ctx = canvasRef.current.getContext('2d')
    //         image.onload = drawImageActualSize
    //     }
    // },[])

  //   const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');

  //   const image1 = new Image();
  //   const image2 = new Image();

  //   // Путь к вашим изображениям
  //   image1.src = '/images/GF.png';
  //   image2.src = '/images/maskGF.png';

  //   image1.onload = () => {
  //     // Определяем коэффициенты масштабирования для подгонки первого изображения
  //     const scaleWidth = canvas.width / image1.width;
  //     const scaleHeight = canvas.height / image1.height;
      
  //     // Выбираем коэффициент для масштабирования, если нужно уменьшить высоту и немного увеличить ширину
  //     const scale = Math.max(scaleWidth, scaleHeight);

  //     // Центрируем первое изображение на холсте
  //     const x1 = (canvas.width - image1.width * scale) / 2;
  //     const y1 = (canvas.height - image1.height * scale) / 2;

  //     // Рисуем первое изображение с масштабированием и центрированием
  //     ctx.drawImage(image1, x1, y1, image1.width * scale, image1.height * scale);

  //     image2.onload = () => {
  //       // Устанавливаем режим композиции
  //       ctx.globalCompositeOperation = 'source-atop';

  //       // Координаты для второго изображения
  //       const top = 380;
  //       const left = 1525;

  //       // Масштабируем координаты для второго изображения
  //       const x2 = x1 + left * scale;
  //       const y2 = y1 + top * scale;

  //       // Рисуем второе изображение с масштабированием и заданной позицией
  //       ctx.drawImage(image2, x2, y2, image2.width * scale, image2.height * scale);

  //       // Сбрасываем режим композиции на default, если будут другие рисунки
  //       ctx.globalCompositeOperation = 'source-over';
  //     };
  //   };
  // }, []);
  return (
    // <div className='app'>
    //   <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid black' }}></canvas>
    // </div>
    <div className='app'>
      <img src='/images/GF.png' id='gf'/>
      <img src='/images/maskGF.png' id='mask'/>
    </div>
  )
}

export default App
