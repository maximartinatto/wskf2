import React from "react";
import "./Home.css";
import "./HomeResponsive.css"
import logo from "../../assets/logo.jpeg";
import Kasuya from "../../assets/Kasuya.jpeg"

const Home = () => {
  return (
    <div className="bgHome" id="home">
      <div className="contentHome" data-aos="zoom-in" data-aos-duration="1500">
        <img className="logo" src={logo} alt="logo escuela" />

        <div className="textHome">
          <p className="textName">WSKF ARGENTINA</p>
        </div>
      </div>
      <div className="contentKasuya" data-aos="fade-up" data-aos-duration="1500">
        <div className="description marginTop">
          <h2>Hitoshi Kasuya</h2>
          <h3>INSTRUCTOR JEFE DE WSKF  9º Dan</h3>
          <p>
            Nacido en 1948, Sensei Hitoshi Kasuya se graduó del riguroso curso de formación de instructores especialistas de la JKA en 1973, a cargo de Nakayama Sensei. Fue alumno de la Universidad de Hosei (Tokio) donde se destacó en el University Karate Club como capitán del equipo.

            Kasuya Sensei sobresalió en estos primeros años en el campo relativamente nuevo del kárate deportivo (de competición). En 1975 compitió en el 1er Campeonato Mundial de la Federación Internacional de Karate Amateur (IAKF) celebrado en los EE. UU., donde  Kasuya Sensei ganó el 1er lugar tanto en kata (formas) como en kumite (lucha) integrando el equipo nacional de Japòn. Kasuya Sensei repitió esta hazaña con el equipo japonés 2 años más tarde cuando se celebraron los Campeonatos del Mundo en Japón.

            En 1980 y 1982, Kasuya Sensei tuvo brillantes actuaciones en los Campeonatos Mundiales de WUKO (ahora WKF ).

            En 1983 participò del 1er Campeonato Mundial de SKI en Japón y ganó el 1er lugar en kata individual y el 1er lugar en kumite por equipos. Del mismo modo, en 1985, en el segundo Campeonato Mundial de SKI, ganó tanto en kumite individual como en kumite por equipos.

          </p>
        </div>
        <div className="marginTop">
          <div className="contentImg">
            <img className="iconImg" alt="imagen" src={Kasuya} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;