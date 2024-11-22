import React, { useState } from "react";
import useFetchImages from "../hooks/useFetchImages";
import ImageCard from "./ImageCard";
import "../styles/ImageGallery.css";

const ImageGallery = () => {
  const [query, setQuery] = useState("nature");
  const { images, loading, error } = useFetchImages(query);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setQuery(inputValue.trim());
    }
  };

  return (
    <div className="gallery-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          placeholder="Search images..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="image-grid">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
