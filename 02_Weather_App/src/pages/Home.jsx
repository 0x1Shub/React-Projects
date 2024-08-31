import React from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDisplay from "../components/WeatherDisplay";
import { UseWeatherApi } from "../hooks/UseWeatherApi";

const Home = () => {
  const { weather, loading, error, fetchWeather } = UseWeatherApi();

  return (
    <div className="home">
      <WeatherForm fetchWeather={fetchWeather} />
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default Home;
