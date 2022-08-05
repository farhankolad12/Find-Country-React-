import React, { useContext, useEffect, useState } from "react";

const CountryProvider = React.createContext();

export const useCountries = () => {
  return useContext(CountryProvider);
};

export function GlobalCountries({ children }) {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      res.status !== 200 && setError(res.statusText);
      const data = await res.json();
      setLoading(false);
      setCountries(data);
      setAllCountries(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const filterBySearch = async (userInput) => {
    setLoading(true);
    if (userInput === "") return getCountries();
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setLoading(false);
      setCountries(
        data.filter((country) =>
          country.name.common.toLowerCase().includes(userInput)
        )
      );
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const filterByRegion = async (userInput) => {
    setLoading(true);
    if (userInput === "all") return getCountries();
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setLoading(false);
      setCountries(data.filter((country) => country.region === userInput));
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const onClickBtn = () => {
    setDarkMode(!darkMode);
  };

  const value = {
    countries,
    filterBySearch,
    filterByRegion,
    onClickBtn,
    darkMode,
    loading,
    error,
    allCountries,
  };

  return (
    <CountryProvider.Provider value={value}>
      {children}
    </CountryProvider.Provider>
  );
}
