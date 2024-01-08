import React from "react";
import CarrouselTorneo from "../../components/CarrouselTorneo/CarrouselTorneo";
import CarrouselSeminario from "../../components/CarrouselSeminario/CarrouselSeminario";
import CarrouselMundial from "../../components/CarrouselMundial/CarrouselMundial";
import GalleryTorneo from "../../utills/EventoTorneoGallery";
import GallerySeminario from "../../utills/EventoSeminarioGallery";
import GalleryMundial from "../../utills/EventoMundialGallery";
import "./Eventos.css";
import "./EventosResponsive.css";

const Gallery = ({ title, images, description }) => {
  return (
    <div className="content">
      <div className="contentTorneoNacional">
        <h1>{title}</h1>
        <div className="carouselContainer">
          <CarrouselTorneo gallery={images} />
        </div>
        <p className="descriptionTorneo">{description}</p>
      </div>
      <div className="contentSeminario">
        <h1>{title}</h1>
        <div className="carouselContainer">
          <CarrouselSeminario gallery={images} />
        </div>
        <p className="descriptionSeminario">{description}</p>
      </div>
      <div className="contentMundial">
        <h1>{title}</h1>
        <div className="carouselContainer">
          <CarrouselMundial gallery={images} />
        </div>
        <p className="descriptionMundial">{description}</p>
      </div>
    </div>
  );
};

const Evento = () => {
  return (
    <div className="bgEventos containerEventos" id="Eventos">
      <div className="backgroundImage">
        <h1>Eventos</h1>
      </div>
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
        <Gallery
          title="W.S.K.F. 16th World KARATE Championships. TOKYO JAPAN"
          images={GalleryMundial}
          description=""
        />

      </div>
    </div>
  );
};

export default Evento;