import { Link, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Border from "./Border";
import { useCountries } from "../contexts/GlobalCountries";

const CountryDetail = ({ country }) => {
  const { darkMode } = useCountries();

  const getFromObj = (object) => {
    for (const name in object) {
      if (Object.hasOwnProperty.call(object, name)) {
        const element = object[name];
        return element.common ? element.common : element.name;
      }
    }
  };

  const getFromObj1 = (object) => {
    let allLan = "";
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        allLan += element + ", ";
      }
    }
    return allLan;
  };

  return (
    <div
      className={darkMode ? "dark-back parent-detail" : "parent-detail"}
      style={{ height: "100vh" }}
    >
      <Header />
      <div className="details">
        <button className={darkMode ? "dark-el" : ""}>
          <Link to={"/"}>
            <i className="bi bi-house-door-fill"></i> Home
          </Link>
        </button>
        <div className="detail">
          <img src={country.flags.png} />
          <div className="detail-info">
            <h1>{country.name.common}</h1>
            <div
              className={darkMode ? "dark-el country-detail" : "country-detail"}
              style={{ backgroundColor: "inherit" }}
            >
              <div className="part-one">
                <p>
                  Native Name:{" "}
                  <span>{getFromObj(country.name.nativeName)}</span>
                </p>
                <p>
                  Population: <span>{country.population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
              <div className="part-two">
                <p>
                  Top Level Domain: <span>{country.tld[0]}</span>
                </p>
                <p>
                  Currencies: <span>{getFromObj(country.currencies)}</span>
                </p>
                <p>
                  Languages: <span>{getFromObj1(country.languages)}</span>
                </p>
              </div>
            </div>
            {country.borders ? (
              <>
                <h3>Border Countries: </h3>
                <div
                  className={darkMode ? "dark-el borders" : "borders"}
                  style={{ backgroundColor: "inherit" }}
                >
                  {country.borders.map((border) => {
                    return <Border key={border} border={border} />;
                  })}
                </div>
              </>
            ) : (
              <h3>No Borders</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
