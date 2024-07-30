'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import ContactForm from "../../../clientsComponents/contact-form";
import Navbar from "../../../clientsComponents/navbar";
import Footer from "../../../clientsComponents/footer";
import ButtonFixedWpp from "../../../clientsComponents/wpp";

export default function Carta() {
  const [expandedSection, setExpandedSection] = useState('entrantes-frios');
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
      setVisibleCount(6);
    } else {
      setExpandedSection(section);
      setVisibleCount(6);
    }
  };

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const entrantesFrios = [
    { title: 'Asadillo de verduras asadas con pétalos de bacalao y pistacho sobre queso de cabra flambeado', description: 'En temporada.', price: '21.50€' },
    { title: 'Tarta de atún rojo con aguacate y mostaza Dijon', price: '16,95€' },
    { title: 'Ensalada de cecina extra wagyu Suprema', description: 'Sobre mango braseado.', price: '22.30€' },
    { title: 'Tabla surtida de ibéricos', description: 'De bellota D.O.', price: '17,40€' },
    { title: 'Anchoas del Cantábrico (6 uds.)', description: 'Sobre fondo tibio de tomate Raf acompañadas de la mojama', price: '18,50€' },
    { title: 'Tosta del mar con sardina ahumada con escamas de queso de merina y carpaccio de Raf', description: 'Sobre tosta caliente', price: '6,95€' },
  ];
  

  const entrantesCalientes = [
    { title: 'Anguilas del Delta del Ebro', description: 'Con huevo de corral (Uno por comensal).', price: '87,00€' },
    { title: 'Mollejas de ternera de León con ajetes', price: '22,90€' },
    { title: 'Perlas de bacalao en base de queso de cabra y pimiento de piquillo confitado', price: '22,50€' },
    { title: 'Steak Tuetano', price: '33,90€' },
    { title: 'Pulpo Gallego braseado', price: '26,50€' },
    { title: 'Calamar de playa con habitas baby', description: 'En su propia tinta', price: '23,90€' },
    { title: 'Huevos Rotos a LA JABUGUERÍA con Jamón de Bellota', description: 'Rellenos de perdiz escabechada', price: '15,90€' },
    { title: 'Pimientos de piquillo', description: 'Rellenos de perdiz escabechada', price: '17,90€' },
    { title: 'Croquetas de liebre y perdiz, jamón de bellota y queso de oveja Merina', description: 'Al estilo de Rafa el Guarda (unidad)', price: '3,05€' },
    { title: 'Extra parrillada de vedura para chuleton', description: 'Por persona', price: '2,75€' }
  ];

  const carnes = [
    { title: 'Chuletón de Vaca Gallega seleccionado', description: 'Maduración variable según pieza', price: '89,50€' },
    { title: 'Chuletón de Buey certificado alta maduración', description: '(min 3 personas)', price: '175,00€/kg' },
    { title: 'Solomillo de jabalí al foie de oca con confitura de tomate', price: '24,30€' },
    { title: 'Wagyu Japonés certificado', price: '€/según mercado' },
    { title: 'Solomillo de gamo asado al carbón a la reducción de los dos vinos acompañado de la guarnición del mercado', price: '24,00€' },
    { title: 'Lechazo asado al horno con leña de encina', price: '28,95€' },
    { title: 'El secreto: Chuletón de ibérico de bellota a la brasa', description: 'Regado con Brandy y acompañado de patatas chips', price: '23,10€' },
    { title: 'Carrillada de ternera leonesa con setas', description: 'Se sirve al gusto también con un crep', price: '21,50€' },
    { title: 'Solomillo de vaca vella de FINCA HISPANIA o carne de lujo Vacum', price: '24,90€' },
    { title: 'Chuletillas de cabrito lechal con ajetes tiernos y guarnición del mercado', price: '19,95€' },
    { title: 'Perdiz roja de monte escabechada al estilo de cortijo', price: '22,95€'},
    { title: 'Venado o jabalí en salsa campera con aromas y recuerdos del monte', price: '19,95€' },
    { title: 'Huevos del corral al estilo de "La Cerrada de Utrero"', price: '17,85€'}
  ];

  const guisos = [
    { title: 'Arroz bomba con conejo de monte, boletus y caracoles', description: 'Presentado meloso al barro', price: '19,95€' },
    { title: 'Arroz bomba meloso marinero', price: '19,95€' },
    { title: 'Fabes Asturianas', description: 'Las auténticas, acompañadas de chacina Ibérica.', price: '17,95€' },
    { title: 'Sartén de ajo de matanza con habitas y un par de huevos de gallina de corral', description: 'Plato con mención especial según el crítico gastronómico del diario El Mundo', price: '19,95€' },
    { title: 'Gazpacho manchego con estilo propio sobre torta rodeña', price: '19,90€' },
    { title: 'Gazpacho al estilo marinero', price: '19,90€' },
    { title: 'Manitas de cerdo', description: 'Deshuesadas y guisadas al PX y almendras marcona', price: '19,80€' },
    { title: 'Rabo de toro de FINCA HISPANIA o Vacum "carne de lujo"', description: 'Deshuesado y guisado al estilo de La Jabuguería', price: '21,50€' },
    { title: 'Judiones de la granja con perdiz matada a plomo o con chacina ibérica', price: '17,90€' },
    { title: 'Migas de pastor', price: '15,95€' },
    { title: 'La Cerrada Del Utrero', price: '17,85€'}
  ];

  const postres = [
    { title: 'Volcán de caviar', description: 'Sobre almendras y helado de coco', price: '€/según mercado' },
    { title: 'Crep helado de turrón regado con chocolate Valor caliente',description: 'Sobre lecho de salsa pil-pil', price: '7,90€' },
    { title: 'Carpaccio de piña con Cointreau y mermelada de naranja amarga', price: '7,50€' },
    { title: 'Sorbete de Maracuyá con trocitos de Mango', price: '6,95€' },
    { title: 'Sorbete de clementina regado con vodka Absolut', price: '6,95€' },
    { title: 'Torrija caramelizada al horno', price: '7,90€' },
    { title: 'Trufas Gourmet', price: '6,50€' },
    { title: 'Alta Repostería Francesa', price: '8,95€' },
  ];

  const pescado = [
    { title: 'Anguilas del Delta del Ebro (100 gr)', description: 'Acompañadas de un huevo de nuestras gallinas de corral', price: '85,00€' },
    { title: 'Lomos de bacalao al estilo de nuestros fogones', description: 'Sobre lecho de salsa pil-pil', price: '24,90€' },
    { title: 'Caviar de Beluga Iraní "000"', price: '€/segun mercado' },
    { title: 'Merluza de Cantábrico al horno con costra de mahonesa. Picual', price: '24,90€' },
    { title: 'Ventresca de Atún Rojo certificado', price: '€/segun mercado' },
    { title: 'Rodaballo salvaje', price: '€/segun mercado' },
    { title: 'Cigala "000"', price: '€/segun mercado' },
    { title: 'Perlas de bacalao en base de queso de cabra', description: 'Y pimiento de piquillo confitado', price: '21,50€' },
    { title: 'Boquerones del Mediterráneo fritos', description: 'Rellenos de jamón ibérico de bellota D.O. Guijuelo', price: '18,95€' }
  ];

  const renderCards = (items) => {
    return items.slice(0, visibleCount).map((item, index) => (
      <div className="container-card-seccion2-cartapag" key={index}>
        <div className="plato-precio-card">
          <h3 className="titulo-card-card">{item.title}</h3>
          {item.description && <p className="descripcion-card-card">{item.description}</p>}
          <p className="precio-card-card">{item.price}</p>
        </div>
      </div>
    ));
  };

  const getItems = (section) => {
    switch (section) {
      case 'entrantes-frios':
        return entrantesFrios;
      case 'entrantes-calientes':
        return entrantesCalientes;
      case 'carnes':
        return carnes;
      case 'guisos':
        return guisos;
      case 'postres':
        return postres;
      case 'pescado':
        return pescado;
      default:
        return [];
    }
  };

  const itemsToRender = getItems(expandedSection);

  return (
    <main>
      <Navbar/>
      <div className='titulo-carta'>
        <h1 className='h1-carta'>Carta</h1>
      </div>
      <div className="back-carta">
        <h2 className="titulo-generico-carta">Todos nuestros <span className="spam-titulogenerico">platos</span></h2>

        <div className="barrita-botones-carta">
          <h2 className={`carta-section-title ${expandedSection === 'entrantes-frios' ? 'active' : ''}`} onClick={() => toggleSection('entrantes-frios')}>
            Entrantes fríos y ensaladas
          </h2>
          <h2 className={`carta-section-title ${expandedSection === 'entrantes-calientes' ? 'active' : ''}`} onClick={() => toggleSection('entrantes-calientes')}>
            Entrantes calientes
          </h2>
          <h2 className={`carta-section-title ${expandedSection === 'carnes' ? 'active' : ''}`} onClick={() => toggleSection('carnes')}>
            Carnes
          </h2>
          <h2 className={`carta-section-title ${expandedSection === 'guisos' ? 'active' : ''}`} onClick={() => toggleSection('guisos')}>
            Guisos
          </h2>
          <h2 className={`carta-section-title ${expandedSection === 'postres' ? 'active' : ''}`} onClick={() => toggleSection('postres')}>
            Postres
          </h2>
          <h2 className={`carta-section-title ${expandedSection === 'pescado' ? 'active' : ''}`} onClick={() => toggleSection('pescado')}>
            Pescado
          </h2>
        </div>

        <div className="carta-section-content">
          {renderCards(itemsToRender)}
        </div>

        {visibleCount < itemsToRender.length && (
          <div className="padding-boton">
         
          <button className="miBoton" onClick={showMore}>
            VER MÁS PLATOS
          </button>
   
          </div>
        )}
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
