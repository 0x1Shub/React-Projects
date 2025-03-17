import React from "react";
import CoffeeList from "../components/CoffeeList";
import bgImage from "../assets/bg-cafe.jpg";

const Home = () => {
  return (
    <div className="bg-[#121212] min-h-screen">
      {/* Background Image */}
      <div className="relative w-full h-[300px]">
        <img src={bgImage} className="w-full h-full object-cover" />

        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      </div>

      {/* Product List Section */}
      <div className="relative z-10 p-5">
        <CoffeeList />
      </div>
    </div>
  );
};

export default Home;
