import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import { fetchForecast } from "./utils/apis";

const Sidebar = () => {
  const[city, setCity] = useState("London");
  const[weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (city) {
      try{
        const response = await fetchForecast(city)
        setWeather(response.data)
        console.log(weather)
      } catch (error){
        alert("No weather data found")
      }
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])
  
  const avgTemp = weather ? ((weather[0].max_temp + weather[0].min_temp)/2 ).toFixed(1): null ;
  const tempRange = weather ?(weather[0].max_temp - avgTemp).toFixed(1): null ;

  return (
    <div className="w-1/3 backdrop-blur-xs p-6 rounded-l-lg shadow-lg text-gray-100">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search..."
          onChange= {(e) => setCity(e.target.value)}
          className="w-full px-4 py-2 bg-gray-500 bg-opacity-50 text-gray-100 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-gray-100"
        />
        <button 
          onClick={fetchWeather}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 hover:text-gray-100"
        >
          <FaSearch />
        </button>
      </div>

      {/* Sidebar Content */}
      { weather?
      <div>
        <h2 className="text-4xl font-bold mb-4">{avgTemp}° +/- {tempRange}</h2>
        <p className="text-lg text-gray-100 mb-4">Wind:{weather[0].wind_cdir} {weather[0].wind_spd} mph</p>
        <div className="mt-6">
          <p className="mb-2 text-4xl">{city} </p>
          <p className="text-sm text-gray-100">
            Weather Description: {weather[0].weather.description}
          </p>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <h3 className="text-lg font-semibold">{weather[0].temp}°C</h3>
          <p className="text-sm text-gray-100">Safe Air Quality Levels</p>
        </div>
      </div>
      :""}
    </div>
  );
};

export default Sidebar;
