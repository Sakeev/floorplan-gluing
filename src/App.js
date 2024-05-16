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

    const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image1 = new Image();
    const image2 = new Image();

    // Путь к вашим изображениям
    image2.src = '/images/maskGF.png';
    image1.src = '/images/GF.png';

    image1.onload = () => {
      // Рисуем первое изображение на всем холсте
      ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);

      image2.onload = () => {
        // Устанавливаем режим композиции
        ctx.globalCompositeOperation = 'source-atop';
  
        // Рисуем второе изображение поверх первого
        ctx.drawImage(image2, 0, 0, canvas.width, canvas.height);
  
        // Сбрасываем режим композиции на default, если будут другие рисунки
        ctx.globalCompositeOperation = 'source-over'
      };
    };
  }, []);
  return (
    <div className='app'>
      <canvas ref={canvasRef} width={900} height={900} style={{ border: '1px solid black' }}></canvas>
    </div>
    
  )
}

export default App
