import React from "react";
import "../styles/ImageCard.css";

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} />
      <p>{image.alt_description || "No description available"}</p>
    </div>
  );
};

export default ImageCard;
