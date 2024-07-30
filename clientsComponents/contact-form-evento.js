'use client'
import { useForm, ValidationError } from "@formspree/react";
import Image from 'next/image'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xblrlaeb");

  if (state.succeeded) {
    return <p className="mensaje-enviado">Mensaje enviado! Estaremos en contacto</p>;
  }

  return (
    <div className="form-contacto-evento">
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
      Comunícate con nosotros haciendo click aquí
      <a href="https://wa.me/34611841205"target="_blank">
      <Image src="/assets/woo.png" alt="Descripción de la imagen" width={30} height={30} className='woo'/>
      </a>
    </div>
  );
}
