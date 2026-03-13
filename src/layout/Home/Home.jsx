import React from "react";
import logo from "../../assets/logo.jpeg";
import Kasuya from "../../assets/Kasuya.jpeg";

const Home = () => {
  return (
    <section className="container-fluid py-5 bg-light" id="home">

      {/* Header */}
      <div className="text-center mb-5">

        <img
          src={logo}
          alt="logo escuela"
          className="img-fluid mb-3"
          style={{ maxWidth: "150px" }}
        />

        <h1 className="fw-bold">WSKF ARGENTINA</h1>

      </div>

      {/* Sección Kasuya */}
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Texto */}
          <div className="col-12 col-lg-6">

            <h2 className="fw-bold">Hitoshi Kasuya</h2>
            <h4 className="text-muted mb-3">
              INSTRUCTOR JEFE DE WSKF 9º Dan
            </h4>

            <p className="text-secondary">
              Nacido en 1948, Sensei Hitoshi Kasuya se graduó del riguroso curso de formación
              de instructores especialistas de la JKA en 1973, a cargo de Nakayama Sensei.
              Fue alumno de la Universidad de Hosei (Tokio) donde se destacó en el University
              Karate Club como capitán del equipo.
            </p>

            <p className="text-secondary">
              En 1975 compitió en el 1er Campeonato Mundial de la IAKF en Estados Unidos,
              donde ganó el 1er lugar tanto en kata como en kumite integrando el equipo
              nacional de Japón.
            </p>

          </div>

          {/* Imagen */}
          <div className="col-12 col-lg-6 text-center">

            <img
              src={Kasuya}
              alt="Kasuya"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "400px" }}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;