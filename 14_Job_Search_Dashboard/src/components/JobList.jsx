import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useJobContext } from "../context/JobContext";
import { fetchJobs } from "../api/fetchJobs";
import JobCard from "./JobCard";

const JobList = () => {
  const { jobs, setJobs } = useJobContext();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    loadJobs();
  }, []);

  const loadMore = async () => {
    const data = await fetchJobs();
    setJobs((prev) => [...prev, ...data]);
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={loadMore}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </InfiniteScroll>
  );
};

export default JobList;
