import React, { useState, useEffect } from "react";
import Image from "next/image";

// export const getStaticProps = async () => {
//   const [lat, setLat] = useState(undefined);
//   const [lon, setLon] = useState(undefined);
//   const [weatherData, setWeatherData] = useState(undefined);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLat(position.coords.latitude);
//       setLon(position.coords.longitude);
//     });
//   }, []);

//   useEffect(() => {
//     getWeatherData();
//   }, [lat, lon]);

//   const res = await fetch(
//     "`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=00da260d1aabb2d7530e8dce69d277a9`"
//   );
// };

const Weather = () => {
  const [lat, setLat] = useState(undefined);
  const [lon, setLon] = useState(undefined);
  const [weatherData, setWeatherData] = useState(undefined);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude);
  //     setLon(position.coords.longitude);
  //   });
  // }, []);

  useEffect(() => {
    getWeatherData();
  }, [lat, lon]);

  const getWeatherData = async () => {
    if (lat == undefined && lat == undefined) return;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=00da260d1aabb2d7530e8dce69d277a9`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="w-1/3 ">
      <div className="flex h-full">
        <div className="flex justify-around w-full m-5 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer">
          {/* {weatherData && (
            <>
              <div className="flex flex-col items-center justify-center">
                <p>{weatherData.name}</p>
                <p>{weatherData.weather[0].description}</p>
                <p>{Math.trunc(weatherData.main.temp)}&deg;F</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="current weather image"
                />
              </div>
            </>
          )} */}
          Weather goes here
        </div>
      </div>
    </div>
  );
};

export default Weather;
