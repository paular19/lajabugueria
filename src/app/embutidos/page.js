'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import ContactForm from "../../../clientsComponents/contact-form";
import Navbar from "../../../clientsComponents/navbar";
import Footer from "../../../clientsComponents/footer";
import ButtonFixedWpp from "../../../clientsComponents/wpp";

export default function Embutidos() {

  return (
    <main>
      <Navbar/>
      <div className="container-seccion1-embutidos">
        <div className="container-titulo-icono-seccion1">
        <div className="container-txt-seccion1">
          <h1 className ="titulo-seccion1-embutidos">Embutidos<spam className="spam-color"> Seleccionados</spam></h1>
          <p className="p-seccion1-emb">Como tradicionalmente hacemos cada año viajamos buscando las mejores piezas de jamón, independientemente del fabricante nuestro objetivo es encontrar los mejores cerdos y el mejor secado. Por ello, nuestra calidad es excepcional.</p>
        </div>
        </div>

        </div>
    
      <div className='container-cards-embutidos'>
        <div className='container-card-embutidos'>
        <Image src="/assets/embutido-img1.png" alt="Descripción de la imagen" width={480} height={220}className="img-emb-card"/> 
        <h1 className='titulo-card-embutido'>Selección negra</h1>
        <p  className='p-card-embutido'>Jamón 100 % ibérico de bellota, denominación de origen valle de los Pedroches</p>
        <h1 className='precio-card-embutido'>Desde 464,89€</h1>
        </div>

        <div className='container-card-embutidos'>
        <Image src="/assets/embutido-img2.png" alt="Descripción de la imagen" width={480} height={220} className="img-emb-card"/> 
        <h1 className='titulo-card-embutido'>Selección roja</h1>
        <p  className='p-card-embutido'>Jamón 75% ibérico o 50% ibérico con una alimentación con bellotas de las dehesas.</p>
        <h1 className='precio-card-embutido'>Desde 340,20€</h1>
        </div>

        <div className='container-card-embutidos'>
        <Image src="/assets/embutido-img3.png" alt="Descripción de la imagen" width={480} height={220} className="img-emb-card"/> 
        <h1 className='titulo-card-embutido'>Selección verde</h1>
        <p  className='p-card-embutido'>Jamón 100%, 75% o 50% ibérico, alimentados con pienso de cereales, hierba y algo de bellota, viviendo en el campo.</p>
        <h1 className='precio-card-embutido'>Desde 209,79€</h1>
        </div>

        <div className='container-card-embutidos'>
        <Image src="/assets/embutido-img4.png" alt="Descripción de la imagen" width={480} height={220} className="img-emb-card"/> 
        <h1 className='titulo-card-embutido'>Selección al vacío</h1>
        <p  className='p-card-embutido'>Nuestros jamones de todas las selecciones cortado a cuchillo y envasado al vacío.</p>
        <h1 className='precio-card-embutido'>90.00€/kg</h1>
        </div>

        <div className='container-card-embutidos'>
        <Image src="/assets/embutido-img5.png" alt="Descripción de la imagen" width={480} height={220} className="img-emb-card"/> 
        <h1 className='titulo-card-embutido'>Aceite de Oliva virgen extra</h1>
        <p  className='p-card-embutido'></p>
        <h1 className='precio-card-embutido'></h1>
        </div>

        <div className='container-card-embutidos'>
        <Image src="/assets/embutido-img6.png" alt="Descripción de la imagen" width={480} height={220} className="img-emb-card"/> 
        <h1 className='titulo-card-embutido'>Embutidos</h1>
        <p  className='p-card-embutido'>Salchichón de solomillo con trufa.</p>
        <p  className='p-card-embutido'>Presa ibérica de bellota.</p>
        </div>
      </div>

      <div className='banda-vinos'>
      <Image src="/assets/nuevabanda-vino.png" alt="Descripción de la imagen" 
  width={1000} 
  height={1000} 
  className='vinos-img-banda'
/>
<div className="titulo-linea-carta">
            <h2 className="titulo-generico-nosotros">Acompañe su cena con los mejores vinos.</h2>
            <div class="linea-con-punto-carta">
              <hr class="linea3" />
              <span class="punto3"></span>
              <hr class="linea3" />
            </div>
            <div className="boton-posicion-carta-vinos">
            <a href="/bodegas">
      <button className="miBoton">NUESTROS VINOS</button>
      </a>
      </div>
            </div>
            
</div>

     
{/* 
<div className="todo-contacto-reserva-def">
      <div className="text-contacto-reserva-def">
      <h2 className="titulo-contacto-txt-def">Reserve su<spam className="spam-titulocontacto"> mesa</spam></h2>
      <p className="parrafo-contacto-txt-def">Viva la mejor experiencia gastronómica. Complete el formulario y lo contactaremos.</p>
      <div className="vectores-blancos-def">
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/hora-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>Lunes a sábado de 8:30 a 17:30 hs</p>
      <hr className="linea-vector-res"></hr>
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/telefono-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>+34 611841205</p>
      <hr className="linea-vector-res"></hr>
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/ubi-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>Camí Real, 179 B 46900 TORRENT Valencia</p>
      </div>
      </div>
      <ContactForm/> 
      </div> */}
      <Footer/>
      <ButtonFixedWpp/>
    </main>
  );
}
