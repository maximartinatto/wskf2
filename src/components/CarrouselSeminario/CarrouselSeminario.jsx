import CardsSeminario from "../CardsSeminario/Cards";

import "./CarrouselSeminario.css";

function Carousel({ gallery }) {
    return (
        <div className="container">

            <CardsSeminario gallery={gallery} />
        </div>
    );
}

export default Carousel;














