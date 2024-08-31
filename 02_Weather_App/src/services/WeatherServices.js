export const fetchWeatherData = async (city) => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY, // Use environment variable for API key
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const result = await response.json(); // Parse JSON directly
    return result; // Return the result to the caller
  } catch (error) {
    throw new Error(error.message); // Propagate the error to the caller
  }
};
