import React from "react";
import GalleryDojo from "../../utills/dojosGallery";
import CarrouselDojo from "../../components/CarrouselDojos/CarrouselDojo";
import logo from "../../assets/logo.jpeg";

const Dojos = () => {
  return (
    <section className="container-fluid py-5 bg-light" id="dojos">

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
            Dojos
          </h1>
        </div>

        {/* CARROUSEL */}
        <div className="row justify-content-center">

          <div className="col-lg-10">
            <CarrouselDojo gallery={GalleryDojo} />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Dojos;
