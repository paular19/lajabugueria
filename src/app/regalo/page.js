'use client'
import Link from "next/link";
import Image from 'next/image'
import ContactFormEvent from "../../../clientsComponents/contact-form-evento";
import Navbar from "../../../clientsComponents/navbar";
import Footer from "../../../clientsComponents/footer";
import ButtonFixedWpp from "../../../clientsComponents/wpp";


export default function Evento() {
     return (
    <main>
 <Navbar/>
      <div className="container-completo-seccion1-card">
      <div className="container-seccion1-evento-card">
        <div className="container-titulo-icono-seccion1-card">
        <div className="container-txt-seccion1-reg">
          <h1 className ="titulo-seccion1-card">Regale una <br></br><spam className="spam-color">experiencia única</spam></h1>
          <p className="p-seccion1-evento-card">Solicite su tarjeta regalo en nuestro formulario de contacto.</p>
        </div>
        
        </div>
        <div className="container-img-seccion1-card">
        <Image src="/assets/regalo-card-sombra.png" alt="Descripción de la imagen" width={900} height={800} className="card-regalo"/> 
        </div>
      </div>
      
      </div>

      <div className="todo-contacto-reserva-event">
      <div className="text-contacto-reserva-card">
      <h2 className="titulo-contacto-txt-card">Regale una experiencia gastronómica en la <spam className="spam-titulocontacto"> Jabuguería</spam></h2>
      <p className="parrafo-contacto-txt-card">Desde nuestro restaurante queremos que compartan con sus seres queridos una fantástica experiencia gastronómica en La Jabuguería.
      Disfrutarán de una gran selección de platos de calidad, buenos guisos y carnes selectas que no les dejarán indiferentes.
      <br></br><br></br>
      Solicite más información sobre cómo adquirir su tarjeta regalo en: 
      </p>
      <div className="vectores-blancos">
      
      <p className="parrafo-contacto-txt2"><Image src="/assets/telefono-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>+34 611841205</p>
      <hr className="linea-vector-card"></hr>
      <p className="parrafo-contacto-txt2"><Image src="/assets/mail-evento.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>lajabugueria@live.com</p>
      </div>
      </div>
      <ContactFormEvent/> 
      </div>
      <Footer/>
      <ButtonFixedWpp/>

    </main>
  );
}