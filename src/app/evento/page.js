'use client'
import Link from "next/link";
import Image from 'next/image'
import ContactFormEvent from "../../../clientsComponents/contact-form-evento";
import Navbar from "../../../clientsComponents/navbar";
import Footer from "../../../clientsComponents/footer";


export default function Evento() {
     return (
    <main>
 <Navbar/>
      <div className="container-completo-seccion1">
      <div className="container-seccion1-evento-r">
        <div className="container-titulo-icono-seccion1-evento">
        <div className="container-txt-seccion1">
          <h1 className ="titulo-seccion1-evento">Su evento en <br></br><spam className="spam-color">La Jabuguería</spam></h1>
          <p className="p-seccion1-evento">Haga que su gran día sea muy especial. Permítanos organizar su evento.</p>
        </div>
        
        </div>
        <div className="container-img-seccion1">
        <Image src="/assets/copa-nueva.png" alt="Descripción de la imagen" width={300} height={400} className="vino"/> 
        </div>
      </div>
      
      </div>

      <div className="todo-contacto-reserva-event-r">
      <div className="text-contacto-reserva-nue">
      <h2 className="titulo-contacto-txt">Organice su <spam className="spam-titulocontacto"> evento</spam></h2>
      <p className="parrafo-contacto-txt-eve">Queremos formar parte de los mejores momentos de su vida.</p>
      <div className="vectores-blancos">
      <p className="parrafo-contacto-txt2"><Image src="/assets/hora-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>Lunes a sábado de 8:30 a 17:30 hs</p>
      <hr className="linea-vector-ev"></hr>
      <p className="parrafo-contacto-txt2"><Image src="/assets/telefono-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>0387 520-5839</p>
      <hr className="linea-vector-ev"></hr>
      <p className="parrafo-contacto-txt2"><Image src="/assets/ubi-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>Camí Real, 179 B 46900 TORRENT Valencia</p>
      </div>
      </div>
      <ContactFormEvent/> 
      </div>
      <Footer/>

    </main>
  );
}