import React from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const JobDashboard = () => {
  return (
    <div className="p-4">
      <SearchBar />
      <Filter />
    </div>
  );
};

export default JobDashboard;
