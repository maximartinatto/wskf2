import React from "react";
import "./GalleryCards.css";

const GalleryCards = ({ gallery }) => {
  return (
    <div className="gallery-grid">
      {gallery.map((item, index) => (
        <div key={index} className="gallery-card">
          <img src={item.img} alt={item.name} className="gallery-img" />
          <div className="gallery-info">
            <h3 className="gallery-title">{item.name}</h3>
            {item.location && <p className="gallery-location">{item.location}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryCards;