import React, { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

const CoffeeList = () => {
  const [filter, setFilter] = useState("all");
  const [coffees, setCoffees] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setCoffees(data))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        );
        const data = await res.json();
        setCoffees(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const filterCoffees =
    filter === "available"
      ? coffees.filter((coffee) => coffee.available)
      : coffees;

  return (
    <div className="relative max-w-5xl mx-auto mt-[-160px] bg-[#1e1e1e] shadow-lg rounded-2xl p-20">
      <h1 className="text-white text-3xl font-bold text-center mb-4">
        Our Collection
      </h1>
      <p className="text-gray-600 text-sm text-center text-balance mb-6">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>

      {/* filter buttons */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-5 py-2 mx-3 rounded-lg transition-all ${
            filter === "all"
              ? "bg-gray-600 text-white font-semibold"
              : "text-white font-semibold hover:bg-gray-600"
          }`}
          onClick={() => setFilter("all")}
        >
          All Products
        </button>
        <button
          className={`px-5 py-2 mx-5 rounded-lg transition-all ${
            filter === "available"
              ? "bg-gray-600 text-white font-semibold"
              : "text-white font-semibold hover:bg-gray-600"
          }`}
          onClick={() => setFilter("available")}
        >
          Available Now
        </button>
      </div>

      {/* Coffee Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filterCoffees.map((coffee, index) => (
          <CoffeeCard key={index} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeList;
