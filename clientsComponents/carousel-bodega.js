import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Img1 from '../public/assets/vino1.png';
import Img2 from '../public/assets/vino2.png';
import Img3 from '../public/assets/vino3.png';
import Img4 from '../public/assets/vino4.png';
import Img5 from '../public/assets/vino5.png';
import Img6 from '../public/assets/vino6.png';
import Img7 from '../public/assets/vino7.png';
import Img8 from '../public/assets/vino8.png';
import Img9 from '../public/assets/vino9.png';
import Img10 from '../public/assets/vino10.png';
import Img11 from '../public/assets/vino11.png';
import Img12 from '../public/assets/vino12.png';
import Img13 from '../public/assets/vino13.png';
import Img14 from '../public/assets/vino14.png';
import Img15 from '../public/assets/vino15.png';
import Img16 from '../public/assets/vino16.png';
import Img17 from '../public/assets/vino17.png';
import Anterior from '../public/assets/anterior-bodega.png';
import Siguiente from '../public/assets/siguiente-bodega.png';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 640) {
        setCardsPerPage(1); // Muestra solo 1 tarjeta
      } else if (windowWidth <= 1240) {
        setCardsPerPage(2);
      
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextA = () => {
    setIndex((prevIndex) => (prevIndex + cardsPerPage) % cardsA.length);
  };

  const prevA = () => {
    setIndex((prevIndex) => (prevIndex - cardsPerPage + cardsA.length) % cardsA.length);
  };

  const cardsA = [
    { src: Img1, titulo: "Jaros Edición Limitada LA JABUGUERÍA", subtitulo: "Bodegas y Viñedos Del Jaro", precio: "33,60€"},
    { src: Img2, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img3, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img4, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img5, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img6, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img7, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img8, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img9, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img10, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img11, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img12, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img13, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img14, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img15, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img16, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
    { src: Img17, titulo: "Bodega Tomás Postigo" , subtitulo: "Tomás Postigo 5to año", precio: "47,50€"},
  ];

  return (
    <div className="carrusel-bodega">
       <button onClick={prevA} className="boton-siguiente-r2">
        <Image src={Anterior} alt="" className="siguiente"/>
        </button>
      <div className="cards-bodega">
     
        {cardsA.slice(index, index + cardsPerPage).map((card, i) => (
  <div key={i} className="card-bodega">
    <Image src={card.src} alt="" className="img-nosotros" width={381} height={506}/>
    <p className='text-carru-bod'>{card.titulo}</p>
    <p className='text-carru-bod-s'>{card.subtitulo}</p>
    <p className='text-carru-bod-p'>{card.precio}</p></div>
))}
      </div>
  
        <button onClick={nextA} className="boton-siguiente-s-r">
        <Image src={Siguiente} alt="" className="siguiente"/>
        </button>
    </div>
  );
};

export default Carousel;