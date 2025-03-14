import React from "react";
import { useJobContext } from "../context/JobContext";

const Filter = () => {
  const { filters, setFilters } = useJobContext();

  return (
    <div className="p-4 border rounded">
      <h2>Filters</h2>

      <select
        value={filters.experience}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, experience: e.target.value }))
        }
        className="p-2 border rounded w-full"
      >
        <option value="">All Experience Level</option>
        <option value="1-3 years">1 - 3 Years</option>
        <option value="3-5 years">3 - 5 Years</option>
      </select>
    </div>
  );
};

export default Filter;
