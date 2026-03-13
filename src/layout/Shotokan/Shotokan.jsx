import React from "react";
import Gichin from "../../assets/gichin.jpg";

const Shotokan = () => {
  return (
    <section className="container-fluid py-5 bg-light" id="shotokan">

      <div className="container">

        <div className="row align-items-start g-5">

          {/* TEXTO */}
          <div className="col-12 col-lg-7">

            <h2 className="fw-bold mb-3">Karate Do Shotokan</h2>

            <p className="text-secondary">
              Shotokan es el arte marcial difundido por el maestro Gichin Funakoshi,
              considerado el padre del Karate moderno. Fue quien logró integrar el
              Karate dentro de las artes marciales formativas japonesas conocidas
              como gendai budō.
            </p>

            <p className="text-secondary">
              El nombre Shotokan fue dado por sus alumnos al dojo donde se
              practicaba este arte marcial. "Shoto" era el seudónimo de Funakoshi
              y "Kan" significa escuela o sala de entrenamiento.
            </p>

            <p className="text-secondary">
              Durante el siglo XX el Karate comenzó a expandirse por Japón y luego
              por el resto del mundo. Este crecimiento estuvo acompañado por la
              incorporación del sistema de cinturones y el uso del uniforme
              inspirado en el judogi.
            </p>

            <h2 className="fw-bold mt-5 mb-3">
              Sensei Gichin Funakoshi
            </h2>

            <p className="text-secondary">
              Gichin Funakoshi comenzó a enseñar karate en Japón a principios
              del siglo XX. Su trabajo fue fundamental para que el Karate
              se difundiera fuera de Okinawa y se transformara en una
              disciplina reconocida a nivel mundial.
            </p>

            <p className="text-secondary">
              Sus enseñanzas sentaron las bases del estilo Shotokan y su
              filosofía continúa influyendo a practicantes de todo el
              mundo hasta el día de hoy.
            </p>

          </div>

          {/* IMAGEN */}
          <div className="col-12 col-lg-5 text-center">

            <img
              src={Gichin}
              alt="Gichin Funakoshi"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "400px" }}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Shotokan;