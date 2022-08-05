import React from "react";
import { Link } from "react-router-dom";
import { useCountries } from "../contexts/GlobalCountries";

const Country = ({ country }) => {
  const { darkMode } = useCountries();

  return (
    <Link
      to={`/${country.name.common.replaceAll(" ", "-").toLowerCase()}`}
      className={darkMode ? "dark-el country" : "country"}
    >
      <img src={country.flags.png} alt="Country Img" />
      <div className="country-info">
        <h3>{country.name.common}</h3>
        <p>
          Population: <span>{country.population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital ? country.capital[0] : "N/A"}</span>
        </p>
      </div>
    </Link>
  );
};

export default Country;
