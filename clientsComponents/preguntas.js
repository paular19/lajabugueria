'use client'
import React, { useState } from 'react';



const Pregunta = ({ pregunta, respuesta, id, preguntaAbierta, setPreguntaAbierta }) => (
    <div>
      <h2 onClick={() => setPreguntaAbierta(id === preguntaAbierta ? null : id)} className="pregunta-txt">{pregunta}</h2><hr className="linea-cuadro-pregunta"></hr>
      {id === preguntaAbierta && <p className="respuesta-txt">{respuesta}</p>}
    </div>
  );


const Preguntas = () => {
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);
    const preguntas = [
        { id: 1, pregunta: '¿Queremos una reunión de negocios o familiar con total privacidad, es posible?', respuesta: 'Sí, en La Jabugueria contamos con tres salones, cada uno de ellos independiente, uno de estos,cuenta con entrada distinta a la del local ,pónganse en contacto con nosotros por vía telefónica para poder guiarles a la mejor opción.' },
        { id: 2, pregunta: '¿De qué peso son Los Chuletones?', respuesta: 'Desde La Jabugueria hacemos el corte del chuletón in situ adecuando el peso a los comensales el peso mínimo para el chuletón de vaca mayor sería sobre 850 g de ahí para adelante aunque también existen excepciones ya que cada uno de nuestros animales es único. Respecto al peso del chuletón de buey, suele ser más elevado el peso mínimo se podría encontrar en unos 1500 g, aunque lo he dicho también hay excepciones.' },
        { id: 3, pregunta: '¿Es fácil aparcar?', respuesta: 'Sí, disponemos de un parking privado a su entera disposición.' },
        { id: 4, pregunta: '¿Hacen envíos de piezas de jamón?', respuesta: 'Si, hacemos envío a España y a Europa con total garantía.' },
        { id: 5, pregunta: '¿Tienen platos para veganos?', respuesta: 'Si, en nuestra carta disponemos de una gran oferta. Es habitual la modificación de ingredientes de nuestros platos en estos casos, aunque también damos la opción de hacer un menú dedicado a veganos o vegetarianos siempre y cuando nos informen con tiempo de antelación.' },
      ];
    return (
<div className="preguntasfrecuentes-container">
<div className="texto-izquierdo-preguntas">
<h1 className ="titulo-seccion1-con">Preguntas <spam className="spam-color">frecuentes</spam></h1>
          <p className="p-seccion1-evento">¡No se quede con dudas! Puede revisar nuestra sección de preguntas frecuentes...</p>
</div>
  <div className="peguntas-yrespuestas">
  {preguntas.map((pregunta) => (
    <Pregunta
      key={pregunta.id}
      id={pregunta.id}
      pregunta={pregunta.pregunta}
      respuesta={pregunta.respuesta}
      preguntaAbierta={preguntaAbierta}
      setPreguntaAbierta={setPreguntaAbierta}
    />
  ))}
  </div>
 


</div>)}

export default Preguntas;