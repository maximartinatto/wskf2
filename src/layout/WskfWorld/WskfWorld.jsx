import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Gallery from "../../utills/wskfWorldGallery";
import "./WskfWorld.css"

const WskfWorld = () => {
    const wskfWorld = Gallery

    return (
        <div className="bgWskfWorld container" id="WskfWorld">
            <div className="contentWskfWorld" data-aos="zoom-in" data-aos-duration="1500">
                <h1>Wskf World</h1>
                <Carrousel gallery={wskfWorld} />
                <p className="description">
                    La Federación Mundial de Karate-Do Shotokan (WSKF) tiene miembros en más de 90 países. Fue fundada en 1990 por Hitoshi Kasuya Sensei (9. Dan) y Takeaki Kamiyanagi Sensei (9. Dan) y es una organización global con un instructor jefe experimentado. Kasuya Sensei terminó el curso de instructor de la JKA (Japan Karate Association) en 1973. Fue alumno de Nakayama Sensei, quien tuvo un impacto importante en él debido a su enfoque científico del karate y su capacidad para desafiar a sus alumnos. Kasuya Sensei fue miembro del equipo nacional de Japón hasta 1982, participando primero en los campeonatos mundiales de la IAKF y luego en la WUKO (Unión Mundial de Organizaciones de Karate-do). En 1983 y 1985 se convirtió en campeón mundial de SKIF (Federación Internacional de Karate-Do Shotokan) en kata, respectivamente kumite. Hasta 1987 participó en torneos y también estuvo activo como instructor.

                    Declaración de la fundacion de WSKF:

                    Nosotros, exponentes del Karate, entrenándonos en el arte del World Shotokan, rechazamos firmemente toda forma de prejuicio y discriminación. No tenemos ninguna posición sobre religión o política y reconocemos a cada individuo y cada organización por separado como entidades autodeterminantes. Buscamos el crecimiento y desarrollo de World Shotokan ya través de eso el desarrollo de la paz mundial. Es nuestra firme decisión fundar nuestro arte como uno moderno y permanente, firmemente arraigado en la amistad y el entendimiento entre todos los seres humanos del planeta. Buscamos el desarrollo y crecimiento de un movimiento mundial de juventud y salud basado en el entendimiento mutuo entre todas las organizaciones miembros federadas. Bajo estos principios rectores organizamos y fundamos la Federación Mundial de Karate-Do Shotokan

                    (FSM). 1 JUNIO 1990
                </p>
            </div>
        </div>

    )
}

export default WskfWorld;