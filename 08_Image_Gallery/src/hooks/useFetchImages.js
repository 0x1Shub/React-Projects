import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useFetchImages = ({ query }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=${
            import.meta.env.VITE_UNSPLASH_API_KEY
          }`
        );
        const data = await response.json();
        setImages(data.results || []);
        setError(null);
      } catch (err) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [query]);

  return { images, loading, error };
};

export default useFetchImages;
