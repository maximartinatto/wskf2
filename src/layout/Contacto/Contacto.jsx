import React from "react";

const channels = [
  {
    title: "Instagram",
    detail: "@wskfargentina",
    href: "https://www.instagram.com/wskfargentina",
    icon: "bi-instagram",
    color: "text-danger",
    label: "Instagram de WSKF Argentina (se abre en otra pestaña)",
    external: true,
  },
  {
    title: "Facebook",
    detail: "WSKF Argentina",
    href: "https://www.facebook.com/wskfargentina",
    icon: "bi-facebook",
    color: "text-primary",
    label: "Facebook de WSKF Argentina (se abre en otra pestaña)",
    external: true,
  },
  {
    title: "Celular",
    detail: "+54 9 3462 620996",
    href: "tel:+5493462620996",
    icon: "bi-telephone-fill",
    color: "text-dark",
    label: "Llamar al +54 9 3462 620996",
  },
  {
    title: "Email",
    detail: "quaranta1936@gmail.com",
    href: "mailto:quaranta1936@gmail.com",
    icon: "bi-envelope-fill",
    color: "text-dark",
    label: "Enviar un correo a quaranta1936@gmail.com",
  },
];

const Contacto = () => (
  <section className="page-section container py-5" id="contacto" aria-labelledby="contact-title">
    <header className="page-header text-center">
      <h1 id="contact-title" className="fw-bold mb-3">Contacto</h1>
      <p className="text-secondary mb-0">
        Comunicate con nosotros por el medio que prefieras.
      </p>
    </header>

    <div className="contact-channels mx-auto">
      <div className="row row-cols-1 row-cols-md-2 g-3 g-lg-4">
        {channels.map(({ title, detail, href, icon, color, label, external }) => (
          <div className="col" key={title}>
            <a
              className="contact-channel card h-100 d-flex flex-row align-items-center gap-3 p-3 p-sm-4 text-decoration-none text-body shadow-sm"
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <span className={`contact-channel-icon fs-2 flex-shrink-0 ${color}`} aria-hidden="true">
                <i className={`bi ${icon}`} />
              </span>
              <div className="contact-channel-details flex-grow-1">
                <h2 className="h5 fw-bold mb-2">{title}</h2>
                <p className="text-secondary text-break mb-0">{detail}</p>
              </div>
              <i className="bi bi-arrow-up-right text-secondary flex-shrink-0" aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contacto;
