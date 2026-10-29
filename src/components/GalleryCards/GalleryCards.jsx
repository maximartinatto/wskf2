import React from "react";

const GalleryCards = ({ gallery = [] }) => (
  <div className="dojo-grid">
    {gallery.map((item) => (
      <article key={item.name} className="card h-100 shadow-sm">
        <img src={item.img} alt={item.name} className="card-img-top dojo-photo" loading="lazy" decoding="async" />
        <div className="card-body text-center">
          <h2 className="card-title h5">{item.name}</h2>
          {item.location && <p className="card-text text-muted mb-0">{item.location}</p>}
        </div>
      </article>
    ))}
  </div>
);

export default GalleryCards;
