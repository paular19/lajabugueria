'use client'
import { useForm, ValidationError } from "@formspree/react";
import Image from 'next/image'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("moqgyvqg");

  if (state.succeeded) {
    return <p>Reserva enviada! Estaremos en contacto</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="form-contacto">
      <p className="reserva-p"><Image src="/assets/Vectoreserva.png" alt="Descripción de la imagen" width={10} height={10}/>Reserve con <spam className="spam-p2">24 horas de anticipación</spam> para asegurar su mesa</p>
      <div className="input-field">
      <label for="full-name" className="nombre"></label>
    <input type="text" name="name" id="full-name" placeholder="Nombre" required="" className="input-contacto"/>
      </div>
      <div className="cuadritos1">
      <div className="input-field">
      <label for="plus" className="nombre"></label>
    <select name="plus" id="plus" required="" className="input-contacto-select">
    <option selected="">Personas</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
    </select>
    </div>
    
    <div className="input-field">
    <label for="telephone" className="nombre"></label>
    <input type="telephone" name="telephone" id="telephone" placeholder="Teléfono" className="input-contacto-select"/>
    </div>
    </div>
    <div className="cuadritos1">
    <div className="input-field">
    <label for="full-name" className="nombre"></label>
    <input type="text" name="name" id="full-name" placeholder=" DD/MM/AA" required="" className="input-contacto-select"/>
    </div>

    <div className="input-field">
    <label for="plus" className="nombre"></label>
    <select name="plus" id="plus" required="" className="input-contacto-select">
    <option value="Horario" selected="">Horario</option>
        <option value="0" selected="">00:00 hs</option>
        <option value="1">01:00 hs</option>
        <option value="2">02:00 hs</option>
        <option value="3">03:00 hs</option>
        <option value="4">04:00 hs</option>
        <option value="5">05:00 hs</option>
        <option value="6">06:00 hs</option>
        <option value="7">07:00 hs</option>
        <option value="8">08:00 hs</option>
        <option value="9">09:00 hs</option>
        <option value="10">10:00 hs</option>
        <option value="11">11:00 hs</option>
        <option value="12">12:00 hs</option>
        <option value="13">13:00 hs</option>
        <option value="14">14:00 hs</option>
        <option value="15">15:00 hs</option>
        <option value="16">16:00 hs</option>
        <option value="17">17:00 hs</option>
        <option value="18">18:00 hs</option>
        <option value="19">19:00 hs</option>
        <option value="20">20:00 hs</option>
        <option value="21">21:00 hs</option>
        <option value="22">22:00 hs</option>
        <option value="23">23:00 hs</option>
    </select>
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
