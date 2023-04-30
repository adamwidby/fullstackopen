import axios from "axios";

// https://restcountries.com/v3.1/all
// copied the json data locally for development: http://localhost:3001/countries

const baseUrl = "https://restcountries.com/v3.1/all";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

export default { getAll };
