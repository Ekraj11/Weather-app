import React from "react";

const RightBar = () => {
  const forecastData = [
    { city: "Washington D.C", temp: 20 },
    { city: "Oklahoma City", temp: 17 },
    { city: "Philadelphia", temp: 14 },
    { city: "San Francisco", temp: 12 },
    { city: "New York City", temp: 10 },
    { city: "South Dakota", temp: -8 },
    { city: "North Dakota", temp: -9 },
  ];

  return (
    <div className="w-2/3  backdrop-blur-xs p-8 rounded-r-lg shadow-lg text-gray-100">
      <h1 className="text-5xl font-bold mb-4">Storm with Heavy Rain</h1>
      <p className="text-gray-100 mb-6">USA, Friday, Jan 3, 2023, 8:45 AM</p>
      <div className="flex justify-between mb-8">
        <div>
          <h3 className="text-2xl">17°</h3>
          <p className="text-sm text-gray-100">E at 10 to 20 mph</p>
        </div>
        <div className="text-right">
          <p className="text-gray-100">
            Chance of snow: <span className="text-gray-100">50%</span>
          </p>
          <p className="text-gray-100">
            Snow accumulations less than one inch.
          </p>
        </div>
      </div>

      {/* Forecast Grid */}
      <div className="grid grid-cols-7 gap-4 text-center">
        {forecastData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100/10 backdrop-blur-lg p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-gray-100">{item.temp}°</h3>
            <p className="text-sm text-gray-100">{item.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBar;
