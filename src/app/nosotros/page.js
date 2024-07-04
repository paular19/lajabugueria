'use client'
import Link from "next/link";
import Image from 'next/image'
import ContactForm from "../../../clientsComponents/contact-form";
import Navbar2 from "../../../clientsComponents/navbar2";
import Footer from "../../../clientsComponents/footer";
export default function Nosotros() {
    return (
      <main>
        <div className="nosotros-container-ppal">
      <Navbar2/>

           
           <div className='titulo-nosotros'>
          <h1 className='h1-carta'>Nosotros</h1>
        </div>
        </div>
            <div className="container-seccion2-nosotros">
              <div className="container-texto">
              <h2 className="titulo-generico-nos">Nuestra <spam className="spam-titulogenerico">historia </spam></h2>
              <p className= "p-seccion1-nosotros">Nuestra historia va unida a una base: la familia. Sin ella hubiese sido imposible escribir los versos de este proyecto.<br></br> 
        <br></br>Corrían los años 60 cuando nuestros abuelos <spam className="spam-p2">Isidra y Diego </spam> emigraban desde Albacete a Valencia con la ilusión de una mejor vida. Se instalaron en un modesto barrio de casitas de protección oficial el barrio San Gregorio, zona obrera alejada entonces de la ciudad de Torrent. Fue al poco tiempo cuando surgió la necesidad de abrir una <spam className="spam-p2">taberna despensa </spam>para ofrecer servicio a los vecinos del barrio. Este local permaneció abierto durante casi 20 años para que cogiera el relevo su yerno, <spam className="spam-p2">Fernando Barrajón </spam>y ampliara los servicios de este local y naciera el <spam className="spam-p2">Bar Fernando </spam>y este contara con la visita frecuente de labradores y camioneros que degustaban buenos platos económicos pero con una limpieza y confección que ya sobresalían con los ofrecidos de otros locales de la zona.<br></br>
        <br></br>La fama del Bar Fernando fue en aumento hasta que <spam className="spam-p2">Trini y yo decidimos seguir con el local. </spam>Fueron años duros donde a base de errores de juventud fuimos aprendiendo día a día este oficio. Así llegamos al año 2000 contando ya con la fidelización de clientes que venían a disfrutar de buenos guisos y carnes selectas. Nació aquí una marca <spam className="spam-p2"> LA JABUGUERÍA</spam>, sinónimo de calidad. <br></br>
        <br></br>Gracias, si está leyendo esto, por seguir ayudándonos a escribir esta historia, la de un patito feo que quiso ser cisne.<br></br>
        <br></br>Han pasado ya más de 20 años y nos encontramos en relevo generacional, hecho de gran dificultad en las pequeñas empresas. Son ahora <spam className="spam-p2">Lucía y Alfonso</spam>, nuestros hijos que se reparten las labores de ventas y compras los que cogen el testigo de LA JABUGUERÍA.<br></br>
        <br></br><spam className="spam-p2">- Alfonso Olid</spam>
        </p>
              </div>

              <div className="container-img">
              <Image src="/assets/fotojabuhist1.png" alt="Descripción de la imagen" width={650} height={350} className="img1-seccionnosotros"/> 
              <Image src="/assets/fotojabuhist2.png" alt="Descripción de la imagen" width={450} height={250} className="img2-seccionnosotros"/> 
              </div>
            </div>

            <div className="titulo-linea">
            <h2 className="titulo-generico-nosotros">Con sabores tradicionales y <spam className="spam-titulogenerico">la calidad de siempre</spam></h2>
            <div class="linea-con-punto3">
              <hr class="linea3" />
              <span class="punto3"></span>
              <hr class="linea3" />
            </div>
            </div>

            <div className="seccion-nocarru">
            <div className="container-img-nocarru">
            <Image src="/assets/imgnocarru1.png" alt="Descripción de la imagen" width={500} height={300} className="imgnocarru"/> 
            <h2 className="titulo-generico-nosotros2">Calidad <spam className="spam-titulogenerico">y más calidad</spam></h2>
            <p className= "p-nocarru-nosotros">Siempre contando con la mayor calidad. Jamones, quesos, aceites, espárragos D.O. Navarra, y nuestros preciados vinos.
            Si hablamos de concepto tenemos que hablar de recuerdos, sabores y sensaciones, espíritu que casi hemos perdido hoy con las prisas. En La Jabuguería tenemos un solo objetivo: su plena satisfacción. </p>
            </div>

            <div className="container-img-nocarru">
            <Image src="/assets/imgnocarru2.png" alt="Descripción de la imagen" width={500} height={300} className="imgnocarru"/> 
            <h2 className="titulo-generico-nosotros2">Finca <spam className="spam-titulogenerico">hispana</spam></h2>
            <p className= "p-nocarru-nosotros">En Finca Hispania criamos ganado vacuno de pasto, cuyo resultado es una carne de excelente calidad. El proyecto lo iniciamos en 2008 en Loreto (Paraguay), donde seleccionamos de la raza Híbrida Brangus novillos y bueyes alimentándolos exclusivamente durante más de 18 meses en nuestros pastos naturales.</p>
            </div>
            </div>
           

            <div className="todo-contacto-reserva-def">
      <div className="text-contacto-reserva-def">
      <h2 className="titulo-contacto-txt-def">Reserve su<spam className="spam-titulocontacto"> mesa</spam></h2>
      <p className="parrafo-contacto-txt-def">Viva la mejor experiencia gastronómica. Complete el formulario y lo contactaremos.</p>
      <div className="vectores-blancos-def">
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/hora-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>Lunes a sábado de 8:30 a 17:30 hs</p>
      <hr className="linea-vector-res"></hr>
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/telefono-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>0387 520-5839</p>
      <hr className="linea-vector-res"></hr>
      <p className="parrafo-contacto-txt2-def"><Image src="/assets/ubi-blanco.png" alt="Descripción de la imagen" width={10} height={10} className="vector-blanco"/>Camí Real, 179 B 46900 TORRENT Valencia</p>
      </div>
      </div>
      <ContactForm/> 
      </div>
      <Footer/> 
         </main>
       );
     }
     
     
     