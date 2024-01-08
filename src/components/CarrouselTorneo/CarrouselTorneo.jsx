import CardsTorneo from "../CardsTorneo/Cards";

import "./CarrouselTorneo.css";

function Carrousel({ gallery }) {
    return (
        <div className="container">

            <CardsTorneo gallery={gallery} />
        </div>
    );
}

export default Carrousel;