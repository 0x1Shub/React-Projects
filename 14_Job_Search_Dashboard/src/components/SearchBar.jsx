import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { useJobContext } from "../context/JobContext";
import { fetchJobs } from "../api/fetchJobs";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { setJobs } = useJobContext();

  const handleSearch = useCallback(
    debounce(async (query) => {
      const data = await fetchJobs(query);
      setJobs(data);
    }, 500),
    []
  );

  return (
    <input
      type="text"
      placeholder="Search for jobs..."
      className="border p-2 rounded w-full"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
};

export default SearchBar;
