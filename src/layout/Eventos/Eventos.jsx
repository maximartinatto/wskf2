import React from "react";
import CarrouselTorneo from "../../components/CarrouselTorneo/CarrouselTorneo";
import CarrouselSeminario from "../../components/CarrouselSeminario/CarrouselSeminario";
import GalleryTorneo from "../../utills/EventoTorneoGallery";
import GallerySeminario from "../../utills/EventoSeminarioGallery";
import "./Eventos.css";
import "./EventosResponsive.css";

const Gallery = ({ title, images, description }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      <div className="carouselContainer">
        <CarrouselTorneo gallery={images} />
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

const Evento = () => {
  return (
    <div className="bgEventos container" id="Eventos">
      <div className="backgroundImage">
        <div className="galleriesContainer">
          <Gallery
            title="Campeonatos Nacionales"
            images={GalleryTorneo}
            description="Anualmente se celebra el Campeonato Nacional WSKF con la participación de alumnos de todo el país."
          />
          <Gallery
            title="Sensei Hitoshi Kasuya en Argentina"
            images={GallerySeminario}
            description="En septiembre de 2022 Sensei Hitoshi Kasuya visitó Argentina por primera vez y dictó seminarios durante 4 días. También tomó exámenes de Danes. Estuvo acompañado por Sensei Fouad Korban, vicepresidente de WSKF y director nacional de WSKF Venezuela."
          />
        </div>
      </div>
    </div>
  );
};

export default Evento;

