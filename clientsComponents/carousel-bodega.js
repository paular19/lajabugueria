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
import Img18 from '../public/assets/vino18.png';
import Anterior from '../public/assets/anterior-bodega.png';
import Siguiente from '../public/assets/siguiente-bodega.png';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 640) {
        setCardsPerPage(1); // Agrega la opción de 600px
      } else if (windowWidth <= 1024) {
        setCardsPerPage(2); // Muestra solo 1 tarjeta
      } else if (windowWidth <= 1920) {
        setCardsPerPage(3);
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
    { src: Img1, titulo: "D.O Ribera del Duero - Jaros Edición Limitada", subtitulo: "Vino tinto", precio: "33,60€"},
    { src: Img2, titulo: "D.O Rias Baixas - La Caña Navia" , subtitulo: "Vino blanco", precio: "34,90€"},
    { src: Img3, titulo: "D.O Rueda - Belondrade y Lurton" , subtitulo: "Vino blanco", precio: "45,95€"},
    { src: Img4, titulo: "D.O Ribera del Duero - Tomás Postigo 5to año" , subtitulo: "Vino tinto", precio: "49,90€"},
    { src: Img5, titulo: "D.O Ribera del Duero - Sed de Caná" , subtitulo: "Vino tinto", precio: "125€"},
    { src: Img6, titulo: "D.O Ribeira Sacra - Pazo La Cuesta" , subtitulo: "Vino blanco", precio: "34,90€"},
    { src: Img7, titulo: "Moët & Chandon Rosé" , subtitulo: "Champagne", precio: "99,99€"},
    { src: Img8, titulo: "Tantum Ergo" , subtitulo: "Cava", precio: "35€"},
    { src: Img9, titulo: "D.O Ribera del duero - Chafandín " , subtitulo: "Vino tinto", precio: "44,30€"},
    { src: Img10, titulo: "Veuve Clicquot (Brut)" , subtitulo: "Champagne", precio: "69,69€"},
    { src: Img11, titulo: "D.O Toro - VATAN ARENA" , subtitulo: "Vino tinto", precio: "52€"},
    { src: Img12, titulo: "D.O Ribera del Duero - Cuesta de las Liebres" , subtitulo: "Vino tinto", precio: "280€"},
    { src: Img13, titulo: "D.O Ribera del Duero - PINGUS" , subtitulo: "Vino tinto", precio: "1.690€"},
    { src: Img14, titulo: "D.O Catilla y León - MAURO" , subtitulo: "Vino tinto", precio: "49,50€ "},
    { src: Img15, titulo: "Ribera del Duero - Pago de Carraovejas" , subtitulo: "Vino tinto", precio: "56,90€"},
    { src: Img16, titulo: "Gran Enemigo Gualtallary" , subtitulo: "Vino tinto", precio: "130€"},
    { src: Img17, titulo: "D.O Ribera del duero - Jaros (Edición Limitada)" , subtitulo: "Vino blanco", precio: "49,90€"},
    { src: Img18, titulo: "D.O Utiel-Requena - Nodus Ocho Encinas" , subtitulo: "Vino tinto", precio: "49,95€"},
  ];

  return (
    <div className="carrusel-bodega">
       <button onClick={prevA} className="boton-siguiente-r2">
        <Image src={Anterior} alt="" className="siguiente"/>
        </button>
      <div className="cards-bodega">
     
        {cardsA.slice(index, index + cardsPerPage).map((card, i) => (
  <div key={i} className="card-bodega">
    <Image src={card.src} alt="" className="img-nosotros-2" width={150} height={506}/>
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