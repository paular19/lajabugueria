import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Img1 from '../public/assets/nuestrosplatos-carru.png';
import Img2 from '../public/assets/jamonesyembutidos-carru.png';
import Img3 from '../public/assets/vinos-carru.png';
import Anterior from '../public/assets/anteriorjabu.png';
import Siguiente from '../public/assets/siguientejabu.png';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1240) {
        setCardsPerPage(1);
      } else {
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
    { src: Img1, titulo: "Nuestros platos" },
    { src: Img2, titulo: "Jamones y Embutidos" },
    { src: Img3, titulo: "Vinos" },
  ];

  return (
    <div className="carrusel-am">
      <div className="cards-carruselam3">
        <div className='texto-carrusel'>
      <h2 className="titulo-generico-b">Nuestros<spam className="spam-titulogenerico"> productos</spam></h2>
      <p className='p-carrusel'>Desde la Jabuguería ofrecemos una selección de productos de máxima calidad, abarcando los mejores jamones y los vinos más exquisitos. 
      <br></br>
      <br></br>
      Lo invitamos a conocer nuestros productos</p>
      <div className="boton-posicion-carrusel">
      <button className="miBoton">TODOS LOS PLATILLOS</button>
      </div>
      </div>

        {cardsA.slice(index, index + cardsPerPage).map((card, i) => (
  <div key={i} className="card-nosotros-obras">
    <Image src={card.src} alt="" className="img-nosotros" width={350} height={228}/>
    <div className='linea-con-punto-carru'>
    <hr class="linea" />
        <span class="punto"></span>
        <hr class="linea" />
    </div>
    <p className='text-carru'>{card.titulo}</p></div>
))}
      </div>
      <div className='flechas-carrusel'>
      <button onClick={prevA} className="boton-siguiente">
        <Image src={Anterior} alt="" className="siguiente"/>
        </button>
        <button onClick={nextA} className="boton-siguiente">
        <Image src={Siguiente} alt="" className="siguiente"/>
        </button>
        </div>
    </div>
  );
};

export default Carousel;
