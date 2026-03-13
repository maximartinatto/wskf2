import React from "react";
import imgWskf from "../../assets/wskfArgentina.jpeg";
import img from "../../assets/fondolandingpage.jpeg";

const WskfArgentina = () => {
  return (
    <section className="container-fluid py-5 bg-light" id="wskf">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* TEXTO */}
          <div className="col-12 col-lg-7">

            <h2 className="fw-bold mb-4">
              WSKF Argentina
            </h2>

            <p className="text-secondary">
              Nuestra misión es difundir la práctica del karate como una opción
              de salud física y emocional a través de actividades
              multidisciplinarias que incluyen el desarrollo técnico, físico,
              formativo y recreativo, especialmente en niños y jóvenes.
            </p>

            <p className="text-secondary">
              Buscamos que nuestros dojos sean una instancia líder en el ámbito
              deportivo marcial, donde el karate do esté al alcance de toda la
              comunidad y forme parte integral de su estilo de vida.
            </p>

            <p className="text-secondary">
              Somos los únicos representantes en Argentina de la
              World Shotokan Karate Do Federation, organización presente en
              más de 90 países con más de 500.000 miembros en todo el mundo.
            </p>

            <p className="text-secondary">
              La organización está encabezada por el Instructor Jefe
              9º Dan Sensei Hitoshi Kasuya y en Argentina es dirigida por
              el Director Nacional Sensei Oscar Quaranta 4º Dan.
            </p>

          </div>

          {/* IMÁGENES */}
          <div className="col-12 col-lg-5">

            <div className="row g-3">

              <div className="col-12">
                <img
                  src={imgWskf}
                  alt="WSKF Argentina"
                  className="img-fluid rounded shadow"
                />
              </div>

              <div className="col-12">
                <img
                  src={img}
                  alt="WSKF"
                  className="img-fluid rounded shadow"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WskfArgentina;