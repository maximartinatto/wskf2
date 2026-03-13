import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "SERVICE_ID",
      "TEMPLATE_ID",
      form.current,
      "PUBLIC_KEY"
    ).then(
      () => {
        alert("Mensaje enviado correctamente");
        e.target.reset();
      },
      (error) => {
        alert("Error al enviar el mensaje");
        console.log(error);
      }
    );
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">Ponte en contacto</h1>

      <div className="row">

        {/* INFO CONTACTO */}
        <div className="col-md-5">

          <h3>Contacto</h3>
          <p>📞 +54 9 3462 620996</p>
          <p>✉️ quaranta1936@gmail.com</p>

        </div>

        {/* FORMULARIO */}
        <div className="col-md-7">

          <form ref={form} onSubmit={sendEmail}>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea
                name="message"
                rows="5"
                className="form-control"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark"
            >
              Enviar mensaje
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contacto;