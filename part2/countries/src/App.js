import { useEffect, useState } from "react";

import countryService from "./services/countriesService";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    countryService.getAll().then((countryData) => {
      setCountries(countryData);
    });
  }, []);

  const handleFiltered = (event) => {
    setFiltered(event.target.value);
  };

  const buttonFiltered = (value) => {
    setFiltered(value);
  };

  return (
    <div>
      <form>
        <input value={filtered} onChange={handleFiltered}></input>
      </form>
      <Countries
        countries={countries}
        filtered={filtered}
        buttonFiltered={buttonFiltered}
      />
    </div>
  );
};

export default App;
