import CardsMundial from "../CardsMundial/Cards";

import "./CarrouselMundial.css";

function Carrousel({ gallery }) {
    return (
        <div className="container">

            <CardsMundial gallery={gallery} />
        </div>
    );
}

export default Carrousel;