import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import HourlyForecast from "./components/HourlyForecast";
import { useWeather } from "./hooks/useWeather";
import Loader from "./components/Loader";

function App() {
  const [city, setCity] = useState("");
  const { weather, forecast, loading, error, searchCity } = useWeather();

  const handleSearch = () => {
    if (city.trim() !== "") {
      searchCity(city);
    }
  };

  // Handle Enter key press inside input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent form submit default behavior
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-400 min-h-screen flex items-center justify-center px-4 font-sans">
      <div className="bg-white/80 shadow-2xl rounded-3xl w-full max-w-md p-6 border border-white">
        {/* Search */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white rounded-full px-4 py-2 flex-grow shadow-inner">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyPress}  // <-- Added this line
              className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>
          <button
            onClick={handleSearch}
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md"
          >
            <FaMapMarkerAlt />
          </button>
        </div>

        {/* Loading/Error */}
        {loading && <Loader />}
        {error && <p className="text-center mt-6 text-red-500">{error}</p>}

        {/* Weather Content */}
        {weather && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800">{weather.name}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="mx-auto h-24 mt-4"
            />
            <p className="text-5xl font-extrabold text-gray-800 mt-2">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="text-sm text-gray-600 capitalize mt-1">
              {weather.weather[0].description}
            </p>
          </div>
        )}

        {/* Forecast */}
        {forecast.length > 0 && <HourlyForecast forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
