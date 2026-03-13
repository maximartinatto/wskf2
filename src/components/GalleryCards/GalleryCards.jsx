import React from "react";

const GalleryCards = ({ gallery }) => {
  return (
    <div className="container">
      <div className="row g-4">

        {gallery.map((item, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">

            <div className="card h-100 shadow-sm">

              <img
                src={item.img}
                alt={item.name}
                className="card-img-top img-fluid"
              />

              <div className="card-body text-center">

                <h5 className="card-title">{item.name}</h5>

                {item.location && (
                  <p className="card-text text-muted">
                    {item.location}
                  </p>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default GalleryCards;