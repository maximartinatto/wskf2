import React from "react";
import GalleryTorneo from "../../utills/EventoTorneoGallery";
import GallerySeminario from "../../utills/EventoSeminarioGallery";
import GalleryMundial from "../../utills/EventoMundialGallery";
import GallerySeminario2024 from "../../utills/EventoSeminario2024";
import GalleryMundial2025 from "../../utills/EventoMundial2025";

import CarrouselTorneo from "../../components/CarrouselTorneo/CarrouselTorneo";
import CarrouselSeminario from "../../components/CarrouselSeminario/CarrouselSeminario";
import CarrouselMundial from "../../components/CarrouselMundial/CarrouselMundial";
import CarrouselSeminario2024 from "../../components/CarrouselSeminario2024/CarrouselSeminario2024";
import CarrouselMundial2025 from "../../components/CarrouselMundial2025/CarrouselMundial2025";

import logo from "../../assets/logo.jpeg";

const Gallery = ({ title, images, description, type }) => {

  const renderCarousel = () => {
    switch (type) {
      case "Torneo":
        return <CarrouselTorneo gallery={images} />;
      case "Seminario":
        return <CarrouselSeminario gallery={images} />;
      case "Mundial":
        return <CarrouselMundial gallery={images} />;
      case "Seminario2024":
        return <CarrouselSeminario2024 gallery={images} />;
      case "Mundial2025":
        return <CarrouselMundial2025 gallery={images} />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-5">

      <h2 className="fw-bold text-center mb-4">
        {title}
      </h2>

      <div className="mb-3">
        {renderCarousel()}
      </div>

      {description && (
        <p className="text-secondary text-center">
          {description}
        </p>
      )}

    </div>
  );
};

const Evento = () => {
  return (
    <section className="container-fluid py-5 bg-light" id="home">

      <div className="container">

        {/* HEADER */}
        <div
          className="text-center mb-5"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img
            src={logo}
            alt="logo escuela"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />

          <h1 className="fw-bold">
            Eventos
          </h1>
        </div>

        {/* GALERIAS */}
        <div className="row">

          <div className="col-12">
            <Gallery
              title="Campeonatos Nacionales"
              images={GalleryTorneo}
              description="Anualmente se celebra el Campeonato Nacional WSKF con la participación de alumnos de todo el país."
              type="Torneo"
            />
          </div>

          <div className="col-12">
            <Gallery
              title="Sensei Hitoshi Kasuya - Argentina 2022"
              images={GallerySeminario}
              description="En septiembre de 2022 Sensei Hitoshi Kasuya visitó Argentina por primera vez y dictó seminarios durante 4 días."
              type="Seminario"
            />
          </div>

          <div className="col-12">
            <Gallery
              title="WSKF 16th World Karate Championships - Tokyo 2023"
              images={GalleryMundial}
              type="Mundial"
            />
          </div>

          <div className="col-12">
            <Gallery
              title="Sensei Fouad Korban - Argentina 2024"
              images={GallerySeminario2024}
              description="En noviembre Sensei Fouad Korban visitó Argentina y dictó seminarios en Buenos Aires y Santa Fe."
              type="Seminario2024"
            />
          </div>

          <div className="col-12">
            <Gallery
              title="WSKF 17th World Karate Championships - Tokyo 2025"
              images={GalleryMundial2025}
              description="Una delegación de 7 competidores participó del campeonato mundial en el Budokan de Tokio."
              type="Mundial2025"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Evento;
