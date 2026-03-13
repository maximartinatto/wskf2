import CardsSeminario2024 from "../CardsSeminario2024/Cards";

function Carrousel({ gallery }) {
  return (
    <section className="container py-5">

      <div className="row justify-content-center">

        <div className="col-12 col-md-10 col-lg-9">
          <CardsSeminario2024 gallery={gallery} />
        </div>

      </div>

    </section>
  );
}

export default Carrousel;