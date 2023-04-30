import weatherService from "./../services/weatherService";
import { useEffect, useState } from "react";

const SingleCountryDisplay = ({
  name,
  capital,
  area,
  languages,
  flag,
  latitude,
  longitude,
}) => {
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentWind, setCurrentWind] = useState("");

  console.log("latitude and longitude", latitude, longitude);

  useEffect(() => {
    weatherService.getWeatherData(latitude, longitude).then((response) => {
      setCurrentTemp(response.current_weather.temperature);
      setCurrentWind(response.current_weather.windspeed);
    });
  }, []);

  console.log("currentTemp: ", currentTemp);

  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      <p>
        <b>languages</b>
      </p>
      <ul>
        {languages.map((language) => {
          return <li key={languages.indexOf(language)}>{language}</li>;
        })}
      </ul>
      <img alt={name} src={flag} />
      <br />
      Current Temp: {currentTemp} Celcius
      <br />
      Current Windspeed: {currentWind} m/s
    </div>
  );
};

export default SingleCountryDisplay;
