import "./WskfArgentina.css"
import React from 'react'
import imgWskf from '../../assets/wskfArgentina.jpeg'
import img from '../../assets/fondolandingpage.jpeg'

const WskfArgentina = () => {
    return (
        <section className="sectionWskfArgentina" id="wskf">
            <div className="contentWskfArgentina" data-aos="fade-up" data-aos-duration="1500">
                <div className="description marginTop">
                    <p>
                        Nuestra misión es difundir la práctica del karate como una opción de salud a nivel físico y emocional a través de actividades multidisciplinarias que incluyen el desarrollo técnico, físico, formativo y recreativo, principalmente en niños y jóvenes que buscan un espacio de expresión y de apoyo que les dé seguridad.

                        Lograr que nuestros dojos sean la instancia líder en el ámbito deportivo marcial, en el cual, el karate do esté al alcance de toda la comunidad y sea parte integral de su forma de vida, contribuyendo a que todos los alumnos cuenten con mejores niveles de salud, educación, desarrollo físico, defensa personal, estabilidad emocional, buena conducta y relación social apropiada


                        Somos los únicos representantes para Argentina de World Shotokan Karate Do Federation, una organización que está presente en más de 90 países y cuenta con más de 500,000 miembros en todo el mundo. La organización está encabezada por el Instructor Jefe 9no Dan, Sensei Hitoshi Kasuya.

                        EI Director Nacional de W.S.K.F. Argentina es Sensei Oscar Quaranta, 4to Dan.

                    </p>
                </div>
                <div className="marginTop">
                    <div className="contentImg">
                        <img className="iconImg" alt="imagen" src={imgWskf}/> 
                        <img className="iconImg" alt="imagen" src={img}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WskfArgentina;