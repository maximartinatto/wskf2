import Cards from "../Cards/Cards";

function Carousel({ gallery }) {
  return (
    <section className="container py-5">

      <div className="row justify-content-center">

        <div className="col-12">
          <Cards gallery={gallery} />
        </div>

      </div>

    </section>
  );
}

export default Carousel;