'use client'
import Link from "next/link";
import Image from 'next/image'
import ContactFormMsj from "../../../clientsComponents/contact-form-msj";
import Preguntas from "../../../clientsComponents/preguntas";
import Navbar from "../../../clientsComponents/navbar";
import Footer from "../../../clientsComponents/footer";



export default function Contacto() {
     return (
    <main>
 <Navbar/>
      <div className="container-completo-seccion1-contacto">
      <div className="container-seccion1-evento">
        <div className="container-titulo-icono-seccion1-con">
        <div className="container-txt-seccion1">
          <h1 className ="titulo-seccion1-con"><spam className="spam-color">Contacto</spam></h1>
          <p className="p-seccion1-evento-r">Contáctese con nosotros y despejaremos todas sus dudas a la brevedad.</p>
        </div>
        
        </div>
      </div>

      <div className="contacto-icono-contacto">
      <ContactFormMsj/> 
      <div className="icons-seccion1-contacto">
      <p className="p-seccion1-evento">También puede contactarnos</p>
          <div className="contenedor-icon-txt-2">
          <Image src="/assets/telefono-jabu.png" alt="Descripción de la imagen" width={23} height={20} /> 
          <h3 className="txt-icon1-2">+34611841205</h3>
          </div>
          <hr className="linea-vector-contacto"></hr>
          <div className="contenedor-icon-txt-2">
          <Image src="/assets/ubi-jabu.png" alt="Descripción de la imagen" width={20} height={20} /> 
          <h3 className="txt-icon-2">Camí Real, 179 B 46900 TORRENT Valencia</h3>
          </div>
          <hr className="linea-vector-contacto"></hr>
          <div className="contenedor-icon-txt-2">
          <Image src="/assets/horario-jabu.png" alt="Descripción de la imagen" width={20} height={20} /> 
          <h3 className="txt-icon-2">Lunes a sábado 8:30 - 17:30 h</h3>
          </div>
        </div>
        </div>
      </div>

      <Link href="https://maps.app.goo.gl/mNdPT1fM4pstqLkv6" target="_blank">
      <div className="mapa">
      </div>
      </Link>

      <Preguntas/>
      

      <Footer/>

    </main>
  );
}