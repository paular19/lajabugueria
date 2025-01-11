'use client'
import { useForm, ValidationError } from "@formspree/react";
import Image from 'next/image'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xblrlaeb");

  if (state.succeeded) {
    return <p className="mensaje-enviado">Mensaje enviado! Estaremos en contacto</p>;
  }

  return (
    <div className="form-contacto-reserva2">
      <p className="reserva-p"><Image src="/assets/Vectoreserva.png" alt="Descripción de la imagen" width={10} height={10}/>Reserve con <spam className="spam-p2">24 horas de anticipación</spam> para asegurar su mesa</p>
      {/* <div className="input-field">
      <label for="full-name" className="nombre"></label>
    <input type="text" name="nombre" id="full-name" placeholder="Nombre y Apellido" required="" className="input-contacto-nombre"/>
      </div>
      <div className="cuadritos1">
      <div className="input-field">
      <label for="plus" className="nombre"></label>
    
    </div>
    
    <div className="input-field">
    <label for="telephone" className="nombre"></label>
    <input type="text" name="asunto" id="asunto" placeholder="Asunto" className="input-contacto-asunto"/>
    </div>
    </div>
    <div className="cuadritos1">
    <div className="input-field">
    <label for="full-name" className="nombre"></label>
    <textarea name="mensaje" id="nombre" placeholder="Mensaje" required="" className="input-contacto-msj"></textarea>
    </div>
    </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="boton-posicion-contacto">
      <button type="submit" disabled={state.submitting} className="miBoton-contacto">
        ENVIAR
      </button>
      </div>
      <ValidationError errors={state.errors} /> */}
      <p className="premplazo">Comuníquese con nosotros y reciba atención personalizada</p>
      <a href="https://wa.me/34611841205"target="_blank">
      <button className="miBoton"><Image src="/assets/wpp-msj.png" alt="Descripción de la imagen" width={20} height={20} className="wpp-msj"/>ENVIAR MENSAJE</button>
      </a>
    </div>
  );
}
