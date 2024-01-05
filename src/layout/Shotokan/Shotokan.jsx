import React from "react";
import "./Shotokan.css"
import Gichin from "../../assets/gichin.jpg"

const Shotokan = () => {
    return (
        <section className="bgShotokan sectionShotokan" id="shotokan">
            <div className="contentShotokan" data-aos="fade-up" data-aos-duration="1500">
                <div className="description marginTop">
                    <h2>Karate Do Shotokan</h2>
                    <p>
                        Shotokan, así se le denomina al tipo de arte marcial ideado por el maestro Gichin Funakoshi quien es reconocido como el padre del Karate moderno, se le considera de esta manera debido a que fue quien difundió esta disciplina y logró
                        que se integrara al grupo de las artes marciales formativas japonesas, también conocidas como gendai budō. Shotokan El Shotokan fue inicialmente el nombre que le colocaron los alumnos al Dojo Sala de entrenamiento del arte marcial
                        japonés Karate-do. El Shotokan fue originariamente el nombre que le pusieron los discípulos al Dojo Sala, donde practicaban el arte marcial japonés Karate-Do. ETIMOLOGÍA DE LA PALABRA SHOTOKAN Representa el sonido del viento, en
                        forma de soplo. También era el seudónimo de Gichin Funakoshi; y Kan, significa escuela. Aunque se debe aclarar que el sensei Funakoshi no fue quien le dio el nombre a este estilo, fueron sus alumnos en honor a las enseñanzas de
                        su sensei. ¿Qué es Shotokan? En los inicios del siglo XX la isla de Okinawa recibió al comisionado escolar de Japón, para ese momento, llamado Shintaro Ogawa; así como también, del capitán de la marina Rokuro Yashiro. Ambos colaboraron
                        en la difusión de estilo de Karate de Funakoshi, sobre todo gracias a la exhibición realizada al príncipe del Emperador Shōwa, quien también acudió a la isla. El gran maestro Jigorō Kanō, fundador del Judo, también fue un gran
                        apoyo para Funakoshi, pues eran buenos amigos. Es así como se establece un innovador arte marcial en Japón. De igual manera, se tomó la decisión de realizar un uniforme similar al judo, sólo que este es un tanto más fino y por
                        ende, menos pesado. También fue incorporado al karate al sistema de grados a través de los cinturones identificados mediante colores, usado por el Judo. El momento que marcó un antes y un después del Shotokan fue entre 1930 y 1960,
                        ya que derivó en la fundación de la escuela Shotokan. También, la llegada al mundo del tercer hijo de Funakoshi, Yoshitaka, significó un momento crucial en la historia de este estilo de karate, debido a que más sería este hijo
                        quien chequearía las bases del Shotokan y haría de esta práctica un arte marcial aún más adaptada al modelo actual. En el año 1935, se acordó como prioridad construir un Dojo central o Hombu Dojo particular, en consecuencia se
                        concibió un comité nacional de practicantes de Karate Do con el objetivo. La organización de WSKF en Australia sigue un camino muy tradicional y nuestra filosofía de entrenamiento es simplemente enseñar un alto nivel de karate
                        técnico y no desviarnos de los principios de Shotokan. Nuestro karate no es uno de “gratificación instantánea” que parece tan frecuente en el mundo de hoy. Tomamos una visión a más largo plazo con nuestro entrenamiento y nos adherimos
                        estrechamente a la filosofía del líder internacional de WSKF, Sensei Hitoshi Kasuya quien, a su vez, ha acercado nuestro estilo de Shotokan a los principios originales del karate promulgados por el fundador de Shotokan Karate,
                        Sensei Gichin Funakoshi.

                    </p>
                    <h2>Sensei Gichin Funakoshi</h2>
                    <p>
                        En el Japón del año 1891 se revierte la norma que prohibía la práctica de artes marciales originarias de la isla de Okinawa. Por lo cual, ya para 1903 el maestro Funakoshi empezaba a dictar clases de artes marciales. Y para el año
                        1914 Japón se enfrenta a una invasión militar, tanto de parte de China como de Corea, lo que obligó a buscar estrategias para preparar a la población civil para que resistiera los embates del conflicto armado, el cual duró cuatro
                        años. Luego de la segunda guerra mundial (1939 - 1945) es que el Karate Shotokan empieza a ser reconocido a nivel global. Gichin Funakoshi Sin embargo se puede mencionar que el estilo de karate Shotokan se origina con la instalación
                        del Dojo. Funakoshi decidió enlazar el estilo Shuri-te del maestro Yasutsune Itosu y el estilo Shorei-te del sensei Ankō Azato, quienes fueron sus instructores, al mismo tiempo eran estudiantes de Pechin Sokon Matsumura, fundador
                        del karate, y conocido también por haber sido guardaespaldas de los reyes de Okinawa.
                    </p>
                </div>
                <div className="marginTop">
                    <div className="contentImg">
                        <img className="iconImg" alt="imagen" src={Gichin} />
                    </div>
                </div>
            </div>
            
        </section>

    )
}

export default Shotokan;