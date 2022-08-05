import React from "react";
import Country from "./Country";
import Form from "./Form";
import Header from "./Header";
import { useCountries } from "../contexts/GlobalCountries";

const Home = () => {
  const { countries, darkMode, loading, error } = useCountries();

  return (
    <>
      <Header />
      <Form />
      {loading ? (
        <div className="loader">
          <img
            src="https://c.tenor.com/NqKNFHSmbssAAAAi/discord-loading-dots-discord-loading.gif"
            alt="Loader"
          />
        </div>
      ) : countries ? (
        <div className={darkMode ? "dark-back countries" : "countries"}>
          {countries.map((country) => {
            return <Country country={country} key={country.name.common} />;
          })}
        </div>
      ) : (
        error && <p>{error}</p>
      )}
    </>
  );
};

export default Home;
