import React from "react";

const FilterSort = ({ setFilter, setSort }) => {
  return (
    <div className="flex justify-between mb-4">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 rounded"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <select onChange={(e) => setSort(e.target.value)} className="p-2 rounded">
        <option value="Added date">Added date</option>
        <option value="Due date">Due date</option>
      </select>
    </div>
  );
};

export default FilterSort;
