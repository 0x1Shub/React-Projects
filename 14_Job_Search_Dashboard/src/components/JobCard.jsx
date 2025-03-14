import { useJobContext } from "../context/JobContext";

const JobCard = ({ job }) => {
  const { appliedJobs, setAppliedJobs } = useJobContext();

  const applyJob = () => {
    setAppliedJobs((prev) => new Set(prev.add(job.id)));
  };

  return (
    <div className="border p-4 rounded shadow-lg">
      <h3 className="font-bold">{job.title}</h3>
      <p>
        {job.company} - {job.location}
      </p>
      <p>{job.salary}</p>
      <button
        className={`px-4 py-2 mt-2 ${
          appliedJobs.has(job.id) ? "bg-gray-500" : "bg-blue-500"
        }`}
        onClick={applyJob}
      >
        {appliedJobs.has(job.id) ? "Applied" : "Apply Now"}
      </button>
    </div>
  );
};

export default JobCard;
