'use client'
import Link from "next/link";
import Image from 'next/image'
import Carousel from "../../clientsComponents/carousel";
import ContactForm from "../../clientsComponents/contact-form";
import Navbar from "../../clientsComponents/navbar";
import ButtonFixedWpp from "../../clientsComponents/wpp";
import Footer from "../../clientsComponents/footer";
import CookieBanner from "../../clientsComponents/cookiesConsent";




export default function Home() {

  return (
    <main>
      <CookieBanner />
      <div className="container-completo-seccion-vieja">
      <Navbar/>
      
      <div className="container-seccion1-ppal-home">
        <div className="container-titulo-icono-seccion1-ppal">
        <div className="container-txt-seccion1">
          <h1 className ="titulo-seccion1">Conservamos los<spam className="spam-color"> sabores</spam></h1>
        </div>
        <div className="icons-seccion1">
          <div className="contenedor-icon-txt">
          <Image src="/assets/telefono-jabu.png" alt="Descripción de la imagen" width={23} height={20} /> 
          <div className="telefonos">
          <h3 className="txt-icon1">96 155 73 01</h3>
          <h3 className="txt-icon1">+34 611 84 12 05</h3>
          </div>
          </div>

          <div className="contenedor-icon-txt">
          <Image src="/assets/ubi-jabu.png" alt="Descripción de la imagen" width={17} height={19} /> 
          <h3 className="txt-icon">Camí Real, 179 B 46900 TORRENT Valencia</h3>
          </div>

          <div className="contenedor-icon-txt">
          <Image src="/assets/horario-jabu.png" alt="Descripción de la imagen" width={20} height={20} /> 
          <h3 className="txt-icon">Lunes a sábado 8:45 - 17:30 h</h3>
          </div>
        </div>
      
        </div>
        {/* <div className="img-hero-ppal">
        <Image src="/assets/img-hero-home.png" alt="Descripción de la imagen" width={550} height={400} className="plato-hero"/> 
        </div> */}
      </div>
      </div>
      <div className="textos-seccion1">
        <h2 className="titulo-generico-ppal">Sobre <spam className="spam-titulogenerico">nosotros</spam></h2>
        <div className="parrafos-bi">
        <p className= "p-seccion1-bi">Pretendemos ser un espacio distinto, donde el comensal se olvide de todo y disfrute comiendo. La Jabuguería es la antítesis de la comida rápida. El aceite de oliva es nuestro mejor aliado.<br></br> 
        <br></br>Tenemos el mejor jamón de bellota de Valencia, pero también elaboramos exquisitos platos de caza y carnes de primera. Contamos con una excelente bodega con varias D.O. 
        <br></br>
        <br></br>Contamos con diferentes salas 
        </p>
        <p className= "p-seccion1-bi">La capilla: nuestro salón privado, cuenta con una capacidad de hasta 20 comensales, proyector de imagen, ordenador, bodega y baño privado.
          <br></br>La salita de caza: Reservado con la esencia de La Jabugueria, inspirada en el comedor de un cortijo donde se cuelgan los trofeos, así como las fotos de esos momentos.<br></br>
        <br></br>La salita de la ganadería de la familia: Reservado que recuerda nuestro proyecto en Paraguay, finca bautizada Hispania, decorado  con fotos de ella.</p>
        </div>
        <div class="linea-con-punto">
        <hr class="linea" />
        <span class="punto"></span>
        <hr class="linea" />
        </div>

      </div>
     

      <div className="container-seccion2">
        <div className="padding-esp">
      <h2 className="titulo-generico">Especialidades de<spam className="spam-titulogenerico"> la casa</spam></h2>
      </div>
      <div className="container-cards-seccion-carta">
      <div className="container-card-seccion2">
        <div className="plato-precio">
        <Image src="/assets/jamon-plato.png" alt="Descripción de la imagen" width={240} height={170} className="chuleton1"/> 
        <div className="nidea-margin">
        <p className="precio-card">0.27€/g.€</p>
        </div>
        </div>
        <div className="texto-card">
          <h3 className="titulo-card">Jamón 100% ibérico de bellota</h3>
        </div>
      </div>  

      <div className="container-card-seccion2">
      <div className="plato-precio">
        <Image src="/assets/gazpacho-plato.png" alt="Descripción de la imagen" width={221} height={192} className="gazp"/> 
        <div className="nidea-margin2"></div>
        <p className="precio-card">21,90€</p>
        </div>
        <div className="texto-card">
          <h3 className="titulo-card">Gazpacho manchego con pichón, liebre y perdiz.</h3>
        </div>
      </div>  

      <div className="container-card-seccion2">
      <div className="plato-precio">
        <Image src="/assets/remplazochuleton.png" alt="Descripción de la imagen" width={220} height={150} className="chuleton3" /> 
        <div className="nidea-margin3"></div>
        <p className="precio-card">179,00€/kg</p>
        </div>
        <div className="texto-card">
          <h3 className="titulo-card">Chuletón de buey, certificado alta maduración.</h3>
        </div>
      </div>        
      </div> 
      <div className="boton-posicion-seccion2">
      <a href="/carta">
      <button className="miBoton">NUESTROS PLATOS</button>
      </a>
      </div>
      </div>
      <div class="linea-con-punto2">
        <hr class="linea2" />
        <span class="punto2"></span>
        <hr class="linea2" />
        </div>
        <div className="container-numeritos-seccion2">
        <div className="numerito-seccion2">
          <h3 className="numerito">+64</h3>
          <p className="p-numerito">Platos</p>
        </div>

        <div className="numerito-seccion2">
          <h3 className="numerito">+66</h3>
          <p className="p-numerito">Años en el rubro</p>
        </div>

        <div className="numerito-seccion2">
          <h3 className="numerito">+75</h3>
          <p className="p-numerito">Vinos</p>
        </div>

        </div>
        <div class="linea-con-punto4">
        <hr class="linea2" />
        <span class="punto2"></span>
        <hr class="linea2" />
        </div>
    
      <Carousel/>
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

