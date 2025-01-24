import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-2"
      />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white py-1 px-3 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
