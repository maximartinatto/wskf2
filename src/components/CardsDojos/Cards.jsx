import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Cards = ({ gallery }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(gallery.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === gallery.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className="container py-4">

      {/* MODAL */}
      {openModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center">

          <FontAwesomeIcon
            icon={faCircleXmark}
            size="2x"
            className="position-absolute top-0 end-0 m-4 text-white"
            onClick={handleCloseModal}
            style={{ cursor: "pointer" }}
          />

          <FontAwesomeIcon
            icon={faChevronLeft}
            size="2x"
            className="position-absolute start-0 ms-4 text-white"
            onClick={prevSlide}
            style={{ cursor: "pointer" }}
          />

          <img
            src={gallery[slideNumber].img}
            alt=""
            className="img-fluid rounded"
            style={{ maxHeight: "80vh" }}
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            size="2x"
            className="position-absolute end-0 me-4 text-white"
            onClick={nextSlide}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      {/* GALERÍA */}
      <div className="row g-3">
        {gallery &&
          gallery.map((slide, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-3"
              onClick={() => handleOpenModal(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={slide.img}
                alt="slide"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
