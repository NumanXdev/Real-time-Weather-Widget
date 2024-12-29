import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 10.82,
    humidity: 100,
    temp: 11.05,
    tempMax: 11.05,
    tempMin: 11.05,
    weather: "mist",
  });
  return (
    <div>
      <h2>Weather App</h2>
      <SearchBox />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
