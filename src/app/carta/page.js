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
    { title: 'JAMÓN IBÉRICO DE BELLOTA (EL GRAMO)', description: 'Cortado a cuchillo, de nuestra propia reserva, entre las mejores denominaciones. Los Pedroches, Guijuelo y Jabugo', price: '0,26 €/gr' },
    { title: 'ESPÁRRAGOS NAVARROS DE LA JABUGUERÍA', description: 'Rellenos de nuestra magistral salsa de Bellota "Cojonudos". Plato 2004', price: '6,95 €' },
    { title: 'CECINA DE WAGYU EXTRA', price: '0,28 €/gr.' },
    { title: 'VOLCÁN DE CAVIAR SOBRE ALMENDRAS Y HELADO DE COCO', description: '10 gr', price: '29,00 €' },
    { title: 'VOLCÁN DE CAVIAR SOBRE ALMENDRAS Y HELADO DE COCO', description: '30 gr', price: '84,90 €' },
    { title: 'VOLCÁN DE CAVIAR SOBRE ALMENDRAS Y HELADO DE COCO', description: '50 gr', price: '139,90 €' },
    { title: 'ENSALADA DE PERDIZ EN ESPEJO DE OLIVA VIRGEN', description: 'al estilo de la Alhambra', price: '19,90 €' },
    { title: 'SURTIDO DE QUESOS DE ESPAÑA Y JOYAS INTERNACIONALES', price: '0,08-0,09 €/gr' },
    { title: 'PRESA “LOMITO” 100% IBÉRICO DE BELLOTA', price: '0,16 €/gr' },
    { title: 'ASADILLO DE VERDURAS SOBRE QUESO DE CABRA FLAMBLEADO', description: 'Y sardina ahumada con madera de haya (en temporada)', price: '21,50 €' },
    { title: 'ENSALADA DE CECINA DE WAGYU EXTRA', description: 'Sobre mango braseado', price: '22,30 €' },
    { title: 'ANCHOAS DEL CANTÁBRICO (8 ud.)', description: '(Costera de primavera, doble lomo maduradas 2 años. Rafa López)', price: '32,95 €' },
    { title: 'TOSTA DEL MAR CON SARDINA AHUMADA', description: 'Sobre escamas de queso de oveja merina y carpaccio de raff', price: '6,95 €' },
    { title: 'SALCHICHÓN DE SOLOMILLO DE BELLOTA CON TRUFA NEGRA ', price: '0,12 €/gr' },
  ];
  

  const entrantesCalientes = [
    { title: 'ANGULAS DEL DELTA DEL EBRO', description: 'Acompañada de un huevo de corral de araucana, por comensal.', price: '87,00€' },
    { title: 'MOLLEJAS DE TERNERA DE LEÓN CON AJETES', price: '22,90€' },
    { title: 'PERLAS DE BACALAO EN BASE DE QUESO DE CABRA ', price: '22,90€' },
    { title: 'STEAK TUÉTANO', description: 'Tuétano de Buey horneado, acompañado de nuestro Solomillo de vaca gallega cortado en crudo y aderezado con mostaza Dijón, alcaparras, pistacho y huevo de corral.', price: '33,90 €' },
    { title: 'PULPO GALLEGO BRASEADO', description: 'Acompañada de papada ibérica de bellota curada.',price: '26,50€' },
    { title: 'TOSTA DE FOIE DE OCA SOBRE MANGO, MANZANA Y MIEL (UNIDAD)', price: '9,90 €' },
    { title: 'SETAS SHYTAKE ACOMPAÑADAS DE UN PAR DE HUEVOS DE CORRAL', description: 'Las yemas se presentan curadas en soja', price: '24,90 €' },
    { title: 'HUEVOS ROTOS A LA JABUGUERÍA CON JAMÓN DE BELLOTA', price: '15,90 €' },
    { title: 'CROQUETAS CASERAS DE VERDAD', description: 'De jamón 100% ibérico de bellota o queso de oveja merina', price: '3,05 €' }
  ];

  const carnes = [
    { title: 'CHULETÓN DE VACA GALLEGA SELECCIONADO', description: 'Maduración variable según pieza', price: '89,50€' },
    { title: 'CHULETÓN DE BUEY CERTIFICADO NACIONAL ALTA MADURACIÓN', price: '158,00€/kg' },
    { title: 'WAGYU NACIONAL', price: '380,00 €/kg' },
    { title: 'WAGYU JAPONÉS CERTIFICADO - LINGOTE 100 gr', price: '75,90 €' },
    { title: 'SOLOMILLO DE GAMO',  description: 'Asado al carbón a la reducción de los dos vinos acompañado de la guarnición del mercado',price: '24,00 €' },
    { title: 'LECHAZO ASADO AL HORNO CON LEÑA DE ENCINA', description: 'Pierna, paletilla o costillar (según mercado)', price: '18,95 € /54,90 €' },
    { title: 'SECRETO IBÉRICO DE BELLOTA A LA BRASA “CARNE ECOLÓGICA”', description: 'Regado con Brandy y acompañado de patatas chips', price: '23,10€' },
    { title: 'CARRILLADA DE TERNERA LEONESA CON SETAS', price: '21,50€' },
    { title: 'SOLOMILLO DE VACA “VELLA GALLEGA”', price: '24,90€' },
  ];

  const guisos = [
    { title: 'ARROZ BOMBA CON CONEJO DE MONTE, BOLETUS Y CARACOLES', description: 'Presentado meloso al barro', price: '19,95€' },
    { title: 'ARROZ BOMBA MELOSO MARINERO', price: '19,95€' },
    { title: 'FABES ASTURIANAS', description: 'Las auténticas acopañadas de chocina ibérica', price: '17,95€' },
    { title: 'SARTÉN DE AJO DE MATANZA CON HABITAS CHICAS Y UN PAR DE HUEVOS DE GALLINA DE CORRAL', description: 'Plato con mención especial según el crítico gastronómico del diario El Mundo', price: '19,50€' },
    { title: 'GAZPACHO MANCHEGO CON ESTILO PROPIO SOBRE TORTA RODEÑA', price: '19,90€' },
    { title: 'VENADO O JABALÍ EN SALSA CAMPERA CON AROMAS Y RECUERDOS DEL MONTE', price: '19,95€' },
    { title: 'MIGAS DE PASTOR',  description: 'con huevos de corral',price: '15,95€' },
    { title: 'SARTÉN DE LA CERRADA DEL UTRERO', price: '17,85€'}
  ];

  const postres = [
    { title: 'VOLCÁN DE CAVIAR SOBRE ALMENDRAS Y HELADO DE COCO', description: '10 gr', price: '29,00 €' },
    { title: 'VOLCÁN DE CAVIAR SOBRE ALMENDRAS Y HELADO DE COCO', description: '30 gr', price: '84,90 €' },
    { title: 'VOLCÁN DE CAVIAR SOBRE ALMENDRAS Y HELADO DE COCO', description: '50 gr', price: '139,90 €' },
    { title: 'CREP DE HELADO DE TURRÓN REGADO CON CHOCOLATE VALOR CALIENTE', price: '7,90€' },
    { title: 'PASTEL TEMPLADO DE QUESO DE OVEJA', price: '7,30€' },
    { title: 'CARPACCIO DE PIÑA CON COINTREAU Y MERMELADA DE NARANJA AMARGA', price: '7,50€' },
    { title: 'SORBETE DE LIMOMCELLO', price: '6,95€' },
    { title: 'SORBETE DE CLEMENTINA REGADO CON VODKA PREMIUM', price: '6,95€' },
    { title: 'TORRIJA CARAMELIZADA AL HORNO', price: '7,90€' },
  ];

  const pescado = [
    { title: 'ANGULAS DEL DELTA DEL EBRO', description: 'Acompañada de un huevo de corral de araucana, por comensal.', price: '87,00€' },
    { title: 'LOMOS DE BACALAO AL ESTILO DE NUESTROS FOGONES', description: 'Sobre lecho de salsa pil-pil', price: '24,90€' },
    { title: 'CAVIAR BELUGA (10g.)', description: 'posibilidad de acompañar con un huevo de arancana de corral.',  price: '29,00 €' },
    { title: 'CAVIAR BELUGA (30g.)', description: 'posibilidad de acompañar con un huevo de arancana de corral.',  price: '84,90 €' },
    { title: 'CAVIAR BELUGA (50g.)', description: 'posibilidad de acompañar con un huevo de arancana de corral.',  price: '139,90 €' },
    { title: 'MERLUZA DEL CANTÁBRICO', description: 'Al horno con costra de mahonesa. Picual', price: '24,90€' },
    { title: 'MORRILLO DE ATÚN ROJO SALVAJE',  description: '(según existencias)',price: '142,00 €' },
    { title: 'RODABALLO SALVAJE', description: '(según existencias)',price: '102,00 €' },
    { title: 'PERLAS DE BACALAO EN BASE DE QUESO DE CABRA ', price: '22,90€' },
    { title: 'BOQUERONES DEL MEDITERRÁNEO FRITOS', description: 'rellenos de jamón ibérico de bellota D.O. Guijuelo (según existencias)', price: '18,95€' }
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
