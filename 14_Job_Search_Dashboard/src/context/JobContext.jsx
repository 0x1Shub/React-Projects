import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState(new Set());

  return (
    <JobContext.Provider value={{ jobs, setJobs, appliedJobs, setAppliedJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
