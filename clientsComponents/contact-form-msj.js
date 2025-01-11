'use client'
import { useForm, ValidationError } from "@formspree/react";
import Image from 'next/image'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xblrlaeb");

  if (state.succeeded) {
    return <p className="mensaje-enviado-msj">Mensaje enviado! Estaremos en contacto</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="form-contacto-evento-contacto">
      <div className="input-field">
      <label for="full-name" className="nombre"></label>
    <input type="text" name="nombre" id="full-name" placeholder="Nombre y Apellido" required="" className="input-contacto-r"/>
      </div>
      <div className="cuadritos1">
      <div className="input-field">
      <label for="plus" className="nombre"></label>
    
    </div>
    
    <div className="input-field">
    <label for="telephone" className="nombre"></label>
    <input type="text" name="asunto" id="asunto" placeholder="Asunto" className="input-contacto-asunto-mensaje"/>
    </div>
    </div>
    <div className="cuadritos1">
    <div className="input-field">
    <label for="full-name" className="nombre"></label>
    <textarea name="mensaje" id="nombre" placeholder="Mensaje" required="" className="input-contacto-msj-msj"></textarea>
    </div>
    </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="boton-posicion-contacto">
      <button type="submit" disabled={state.submitting} className="miBoton-contacto">
        ENVIAR
      </button>
      </div>
      <ValidationError errors={state.errors} />
    </form>
  );
}