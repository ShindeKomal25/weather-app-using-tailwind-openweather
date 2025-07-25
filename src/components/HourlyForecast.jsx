import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HourlyForecast.css';

function HourlyForecast({ forecast }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });

  return (
    <div className="relative mt-10">
      <div
        ref={scrollRef}
        className="flex gap-4 px-2 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {forecast.map((item, index) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          const icon = item.weather[0].icon;
          const temp = Math.round(item.main.temp);
          const desc = item.weather[0].description;

          return (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md hover:shadow-lg transition rounded-xl p-4 min-w-[80px] text-gray-700 hourly-card"
            >
              <p className="text-xs font-medium">{time}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={desc}
                className="w-10 my-2"
              />
              <p className="text-sm font-semibold">{temp}°C</p>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default HourlyForecast;
