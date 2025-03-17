import React from "react";

const CoffeeCard = ({ coffee }) => {
  return (
    <div>
      <div className="relative">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-full object-cover rounded-lg"
        />

        {coffee.popular && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      <div className="flex justify-between mt-3">
        <h3 className="text-white text-lg font-semibold">{coffee.name}</h3>
        <p className="text-black bg-green-200 text-sm font-semibold px-2 py-1 rounded-lg">
          {coffee.price}
        </p>
      </div>

      <div className="flex justify-between mt-3">
        {coffee.rating ? (
          <p className="text-white text-sm">
            ⭐ {coffee.rating}{" "}
            <span className="text-gray-400">({coffee.votes} votes)</span>
          </p>
        ) : (
          <p className="text-gray-400">No ratings</p>
        )}

        {coffee.available ? (
          ""
        ) : (
          <span className="text-red-400 text-sm font-semibold">Sold Out</span>
        )}
      </div>
    </div>
  );
};

export default CoffeeCard;
