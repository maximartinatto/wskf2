import React from "react";
import GalleryDojo from "../../utills/dojosGallery";
import CarrouselDojo from "../../components/CarrouselDojos/CarrouselDojo";
import logo from "../../assets/logo.jpeg";
import "./Dojos.css";

const Gallery = ({ title, images, description, component }) => {
  return (
    <div className={`content${component}`}>
      <h1>{title}</h1>
      <div className="carouselContainer">
        {component === "Dojos" && <CarrouselDojo gallery={images} />}
      </div>
      <p className={`description${component}`}>{description}</p>
    </div>
  );
};

const Dojos = () => {
  return (
    <div className="bgHome" id="home">
      <div className="contentHome" data-aos="zoom-in" data-aos-duration="1500">
        <img className="logo" src={logo} alt="logo escuela" />
        <div className="textHome">
          <p className="textName">Dojos</p>
        </div>
      </div>

      <div className="contentGallerys">
        <div className="galleryDojos">
          <Gallery
            title="Dojos"
            images={GalleryDojo}
            description=""
            component="Dojos"
          />
        </div>
      </div>
    </div>
  );
};

export default Dojos;

