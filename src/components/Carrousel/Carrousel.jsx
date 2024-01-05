import Cards from "../Cards/Cards";

import "./Carrousel.css";

function Carousel({ gallery }) {
    return (
        <div className="container">

            <Cards gallery={gallery} />
        </div>
    );
}

export default Carousel;