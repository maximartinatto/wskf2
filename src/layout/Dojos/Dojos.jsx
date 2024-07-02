import React from "react";
import KaizenDojo1 from '../../assets/Dojos/Kaizen1.jpeg';
import DojoShindokai1 from '../../assets/Dojos/DojoShindokai.jpeg';
import DojoShindokai2 from '../../assets/Dojos/DojoShindokai2.jpeg';
import DojoShoshinsha from '../../assets/Dojos/DojoShoshinsha.jpeg';
import OkinawaDojo from '../../assets/Dojos/OkinawaDojo.jpeg';
import Shindokai from '../../assets/Dojos/ShindokaiGuernica.jpeg'
import "./Dojos.css";

const Dojos = () => {
    return (
        <div>
            <div>
                <h2>Honbu Dojo - Venado Tuerto - Santa Fe</h2>
                <ul>
                    <h3>Instructores</h3>
                    <li>Sensei Oscar Quaranta 4to dan</li>
                    <li>Sensei Matias Centini 3er dan</li>
                    <li>Sensei Juan Armesto 2do dan</li>
                    <li>Sensei Nancy Sosa 1er dan</li>
                    <li>Sensei Maximiliano Pejkovic 1er dan</li>
                </ul>
                
            </div>
            <div>
                <h2>Kaizen Dojo - Venado Tuerto - Santa Fe</h2>
                <ul>
                    <h3>Instructores</h3>
                    <li>Sensei Juan Ignacio Ike 3er dan</li>
                    <li>Sensei Virgina Ike 1er dan</li>
                    <li>Sensei Franco Garcia 1er dan</li>
                    <li>Sensei Alexis Arguello</li>
                    <li>Sensei Claudio Escobar</li>
                </ul>
                <img src={KaizenDojo1} alt="kaizen1"/>
            </div>
            <div>
                <h2>Okinawa Dojo - Oberà - Misiones</h2>
                <ul>
                    <h3>Instructores</h3>
                    <li>Sensei Miguel Dino 1er dan</li>
                    <li>Sensei Laura Dino 1er dan</li>
                    <li>Sensei Noelia Dino 1er dan</li>
                </ul>
                <img src={OkinawaDojo} alt="okinawa"/>
            </div>
            <div>
                <h2>Shoshinsha Dojo - Gualeguaychu - Entre Rios</h2>
                <ul>
                    <h3>Instructor</h3>
                    <li>Sensei Cristian Nuñez 1er dan</li>
                </ul>
                <img src={DojoShoshinsha} alt="shoshinsha" />
            </div>
            <div>
                <h2>Bushido Dojo - Pinamar - Buenos Aires</h2>
                <ul>
                    <h3>Instructor</h3>
                    <li>Sensei Hugo Rodriguez 1er dan</li>
                </ul>
            </div>
            <div>
                <h2>Shindokai Dojo - Guernica - Buenos Aires</h2>
                <ul>
                    <h3>Instructor</h3>
                    <li>Sensei Sergio Canseco 3er dan</li>
                </ul>
                <img src={Shindokai} alt="shindokai" />
            </div>
            <div>
                <h2>Shindokai Dojo - Longchamps - Buenos Aires</h2>
                <ul>
                    <h3>Instructor</h3>
                    <li>Sensei Silvio Juncos 2do dan</li>
                    <li>Sensei Andres Martinez 2do dan</li>
                    <li>Sensei Pablo Garcia 1er dan</li>
                    <li>Sensei Miriam Alderete 1er dan</li>
                    <li>Daniel Medina</li>
                    <li>Aldana Castagneti</li>
                    <li>Payla Pantano</li>
                    <li>Rodrigo Fernandez</li>
                </ul>
                <img src={DojoShindokai1} alt="shindokai 1" />
                <img src={DojoShindokai2} alt="shindokai 2" />
            </div>
           
        </div>
    )
}

export default Dojos;