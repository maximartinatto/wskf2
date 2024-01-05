import CardsTorneo from "../CardsTorneo/Cards";

import "./CarrouselTorneo.css";

function Carousel({ gallery }) {
    return (
        <div className="container">

            <CardsTorneo gallery={gallery} />
        </div>
    );
}

export default Carousel;