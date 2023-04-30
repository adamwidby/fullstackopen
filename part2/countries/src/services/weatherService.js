import axios from "axios";

//https://open-meteo.com/en/docs/gfs-api

const baseUrl = "https://api.open-meteo.com/v1/gfs?";

const getWeatherData = (latitude, longitude) => {
  return axios
    .get(
      `${baseUrl}latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
    .then((response) => response.data);
};

export default { getWeatherData };
