'use client'
import Link from "next/link";
import Image from 'next/image'
import ContactForm from "../../../clientsComponents/contact-form-reserva";
import Navbar from "../../../clientsComponents/navbar";
import ButtonFixedWpp from "../../../clientsComponents/wpp";
import Footer from "../../../clientsComponents/footer";



export default function Evento() {
     return (
    <main>
 <Navbar/>

 <div className="todo-contacto-reserva-def">
      <div className="text-contacto-reserva-def">
      <h2 className="titulo-contacto-txt-def">Reserve su<spam className="spam-titulocontacto"> mesa</spam></h2>
      <p className="parrafo-contacto-txt-def">Viva la mejor experiencia gastronómica. Tocá el ícono de Whatsapp y contáctanos.</p>
      <div className="vectores-blancos-def">
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/hora-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>Lunes a sábado de 8:45 a 17:30 hs</p>
      <hr className="linea-vector-res"></hr>
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/telefono-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>+34 611841205 - 96 155 73 01</p>
      <hr className="linea-vector-res"></hr>
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/ubi-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>Camí Real, 179 B 46900 TORRENT Valencia</p>
      </div>
      </div>
      <ContactForm/> 
      </div>
      <ButtonFixedWpp/>
      
    </main>
  );
}