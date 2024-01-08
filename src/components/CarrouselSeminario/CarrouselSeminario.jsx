import CardsSeminario from "../CardsSeminario/Cards";

import "./CarrouselSeminario.css";

function Carrousel({ gallery }) {
    return (
        <div className="container">

            <CardsSeminario gallery={gallery} />
        </div>
    );
}

export default Carrousel;














