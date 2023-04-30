import Country from "./Country";
import SingleCountryDisplay from "./SingleCountryDisplay";

const Countries = (props) => {
  const filteredCountries = props.countries.filter((countryObject) =>
    countryObject.name.common
      .toUpperCase()
      .includes(props.filtered.toString().toUpperCase())
  );

  if (filteredCountries.length === 1) {
    const filteredCountry = filteredCountries[0];
    const filteredCountryLanguages = [];

    for (const language in filteredCountry.languages) {
      filteredCountryLanguages.push(filteredCountry.languages[language]);
    }

    return (
      <div>
        <SingleCountryDisplay
          name={filteredCountry.name.common}
          capital={filteredCountry.capital[0]}
          area={filteredCountry.area}
          languages={filteredCountryLanguages}
          flag={filteredCountry.flags.png}
          latitude={filteredCountry.latlng[0]}
          longitude={filteredCountry.latlng[1]}
        />
      </div>
    );
  }

  if (filteredCountries.length < 10) {
    return (
      <div>
        {filteredCountries.map((filteredCountryObject) => {
          return (
            <Country
              key={props.countries.indexOf(filteredCountryObject)}
              name={filteredCountryObject.name.common}
              buttonFiltered={props.buttonFiltered}
            />
          );
        })}
      </div>
    );
  }

  if (filteredCountries.length >= 10) {
    return <div>More than 10 search results. Be more specific.</div>;
  }
};

export default Countries;
