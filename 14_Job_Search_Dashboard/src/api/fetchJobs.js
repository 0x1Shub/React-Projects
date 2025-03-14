import axios from "axios";

export const fetchJobs = async (query = "") => {
  try {
    const response = await axios.get(
      `https://api.example.com/jobs?search=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs", error);
    return [];
  }
};
