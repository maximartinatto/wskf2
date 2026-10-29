import { useMemo, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PhotoGallery = ({ gallery = [] }) => {
  const [index, setIndex] = useState(-1);
  const trigger = useRef(null);
  const slides = useMemo(() => gallery.map((item, position) => ({
    src: item.img,
    alt: item.alt || item.name || `Fotografía ${position + 1} de la galería`,
  })), [gallery]);

  return (
    <>
      <div className="photo-grid">
        {slides.map((slide, position) => (
          <button
            key={`${slide.src}-${position}`}
            type="button"
            className="photo-thumbnail rounded shadow-sm"
            aria-label={`Ampliar fotografía ${position + 1}`}
            aria-haspopup="dialog"
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setIndex(position);
            }}
          >
            <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={Math.max(0, index)}
        slides={slides}
        carousel={{ preload: 1, padding: "8%", imageFit: "contain" }}
        controller={{ aria: true, closeOnPullDown: true, closeOnBackdropClick: true }}
        labels={{ Close: "Cerrar galería", Previous: "Fotografía anterior", Next: "Fotografía siguiente", "Loading...": "Cargando...", "Error loading image": "No se pudo cargar la imagen" }}
        on={{ exited: () => trigger.current?.focus({ preventScroll: true }) }}
      />
    </>
  );
};

export default PhotoGallery;
