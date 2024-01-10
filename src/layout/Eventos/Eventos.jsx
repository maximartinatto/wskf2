import React from "react";
import GalleryTorneo from "../../utills/EventoTorneoGallery";
import GallerySeminario from "../../utills/EventoSeminarioGallery";
import GalleryMundial from "../../utills/EventoMundialGallery";
import CarrouselTorneo from "../../components/CarrouselTorneo/CarrouselTorneo";
import CarrouselSeminario from "../../components/CarrouselSeminario/CarrouselSeminario";
import CarrouselMundial from "../../components/CarrouselMundial/CarrouselMundial";
import logo from "../../assets/logo.jpeg";
import "./Eventos.css";


const Gallery = ({ title, images, description, component }) => {
  return (
    <div className={`content${component}`}>
      <h1>{title}</h1>
      <div className="carouselContainer">
        {component === "Torneo" && <CarrouselTorneo gallery={images} />}
        {component === "Seminario" && <CarrouselSeminario gallery={images} />}
        {component === "Mundial" && <CarrouselMundial gallery={images} />}
      </div>
      <p className={`description${component}`}>{description}</p>
    </div>
  );
};

const Evento = () => {
  return (
    <div className="bgHome" id="home">
      <div className="contentHome" data-aos="zoom-in" data-aos-duration="1500">
        <img className="logo" src={logo} alt="logo escuela" />

        <div className="textHome">
          <p className="textName">Eventos</p>
        </div>
      </div>
      <div className="contentGallerys">
        <div className="galleryTorneo">
          <Gallery
            title="Campeonatos Nacionales"
            images={GalleryTorneo}
            description="Anualmente se celebra el Campeonato Nacional WSKF con la participación de alumnos de todo el país."
            component="Torneo"
          />
        </div>
        <div className="gallerySeminario">
          <Gallery
            title="Sensei Hitoshi Kasuya en Argentina"
            images={GallerySeminario}
            description="En septiembre de 2022 Sensei Hitoshi Kasuya visitó Argentina por primera vez y dictó seminarios durante 4 días. También tomó exámenes de Danes. Estuvo acompañado por Sensei Fouad Korban, vicepresidente de WSKF y director nacional de WSKF Venezuela."
            component="Seminario"
          />
        </div>
        <div className="galleryMundial">
          <Gallery
            title="W.S.K.F. 16th World KARATE Championships. TOKYO JAPAN"
            images={GalleryMundial}
            description=""
            component="Mundial"
          />
        </div>
      </div>
    </div>
  );
};

export default Evento;

