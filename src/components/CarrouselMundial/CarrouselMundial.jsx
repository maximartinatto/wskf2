import CardsMundial from "../CardsMundial/Cards";

function Carrousel({ gallery }) {
  return (
    <section className="container py-5">

      <div className="row justify-content-center">

        <div className="col-12 col-md-10 col-lg-8">
          <CardsMundial gallery={gallery} />
        </div>

      </div>

    </section>
  );
}

export default Carrousel;