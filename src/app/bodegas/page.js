'use client'
import Link from "next/link";
import Image from 'next/image'
import Navbar from "../../../clientsComponents/navbar";
import Footer from "../../../clientsComponents/footer";
import Carouselbo from "../../../clientsComponents/carousel-bodega";
import ContactForm from "../../../clientsComponents/contact-form";
import ButtonFixedWpp from "../../../clientsComponents/wpp";


export default function Bodegas() {
     return (
    <main>
 <Navbar/>
      <div className="container-completo-seccion1">
      <div className="container-seccion1-bod">
        <div className="container-titulo-icono-seccion1-bod">
        <div className="container-txt-seccion1-bod">
          <h1 className ="titulo-seccion1">Nuestra<spam className="spam-color"> Bodega</spam></h1>
          <p className="p-seccion1-bod">Le ofrecemos la mejor selección de vinos de la región...</p>
        </div>
        
        </div>
        <div className="container-img-seccion1-bod">
        <Image src="/assets/hero-bodega.png" alt="Descripción de la imagen" width={450} height={500} className="hero-bod"/> 
        </div>
      </div>
      
      </div>
      <Carouselbo/>
      <div className='banda-vinos'>
      <Image src="/assets/banda-bodega.png" alt="Descripción de la imagen" 
  width={1000} 
  height={1000} 
  className='vinos-img-banda'
/>
<div className="titulo-linea-carta">
            <h2 className="titulo-generico-nosotros-r">Conozca nuestra línea de embutidos</h2>
            <div class="linea-con-punto-carta">
              <hr class="linea3" />
              <span class="punto3"></span>
              <hr class="linea3" />
            </div>
            <div className="boton-posicion-carta-vinos">
      <a href="/embutidos">
      <button className="miBoton">NUESTROS EMBUTIDOS</button>
      </a>
      </div>
            </div>
            
</div>
{/* <div className="todo-contacto-reserva-def">
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

