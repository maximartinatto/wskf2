import CardsTorneo from "../CardsTorneo/Cards";

function Carrousel({ gallery }) {
  return (
    <section className="container py-5">

      <div className="row justify-content-center">

        <div className="col-12 col-md-10 col-lg-9">
          <CardsTorneo gallery={gallery} />
        </div>

      </div>

    </section>
  );
}

export default Carrousel;