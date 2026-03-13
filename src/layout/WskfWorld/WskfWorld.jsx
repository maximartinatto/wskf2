import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Gallery from "../../utills/wskfWorldGallery";

const WskfWorld = () => {
  const wskfWorld = Gallery;

  return (
    <section className="container-fluid py-5 bg-light" id="WskfWorld">

      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h1 className="fw-bold">WSKF World</h1>
        </div>

        {/* CARROUSEL */}
        <div className="mb-5">
          <Carrousel gallery={wskfWorld} />
        </div>

        {/* TEXTO */}
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <p className="text-secondary">
              La Federación Mundial de Karate-Do Shotokan (WSKF) tiene
              miembros en más de 90 países. Fue fundada en 1990 por
              Sensei Hitoshi Kasuya (9º Dan) y Sensei Takeaki Kamiyanagi
              (9º Dan) como una organización global dedicada al desarrollo
              del karate Shotokan.
            </p>

            <p className="text-secondary">
              Kasuya Sensei completó el curso de instructor de la
              Japan Karate Association en 1973 y fue alumno directo
              de Masatoshi Nakayama, quien influyó profundamente
              en su enfoque científico del karate.
            </p>

            <p className="text-secondary">
              Fue miembro del equipo nacional de Japón hasta 1982,
              participando en campeonatos mundiales de la IAKF
              y posteriormente de la WUKO.
            </p>

            <p className="text-secondary">
              En 1983 y 1985 se convirtió en campeón mundial de
              la SKIF en kata y kumite. Hasta 1987 continuó compitiendo
              en torneos internacionales y desarrollando su labor
              como instructor.
            </p>

            <h3 className="fw-bold mt-5 mb-3">
              Declaración de Fundación de WSKF
            </h3>

            <p className="text-secondary">
              Nosotros, exponentes del Karate entrenados en el arte
              del World Shotokan, rechazamos firmemente toda forma
              de prejuicio y discriminación.
            </p>

            <p className="text-secondary">
              No tenemos posición sobre religión o política y
              reconocemos a cada individuo y organización como
              entidades autodeterminantes.
            </p>

            <p className="text-secondary">
              Buscamos el crecimiento del World Shotokan y,
              a través de él, contribuir al desarrollo de la
              paz mundial mediante la amistad y el entendimiento
              entre todos los seres humanos.
            </p>

            <p className="text-secondary">
              Bajo estos principios se fundó la Federación Mundial
              de Karate-Do Shotokan el 1 de junio de 1990.
            </p>

          </div>
        </div>

      </div>

    </section>
  );
};

export default WskfWorld;