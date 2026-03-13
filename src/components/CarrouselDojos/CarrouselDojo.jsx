import GalleryCards from "../GalleryCards/GalleryCards";

const CarrouselDojo = ({ gallery }) => {
  return (
    <section className="container py-5">

      <div className="row justify-content-center">

        <div className="col-12">
          <GalleryCards gallery={gallery} />
        </div>

      </div>

    </section>
  );
};

export default CarrouselDojo;
