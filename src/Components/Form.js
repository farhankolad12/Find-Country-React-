import React from "react";
import { useCountries } from "../contexts/GlobalCountries";

const Form = () => {
  const { filterBySearch, filterByRegion, darkMode } = useCountries();

  const searchCountry = (e) => {
    filterBySearch(e.target.value.toLowerCase());
  };

  const searchRegion = (e) => {
    filterByRegion(e.target.value);
  };

  return (
    <div className={darkMode ? "dark-back input-actions" : "input-actions"}>
      <input
        type={"text"}
        onInput={searchCountry}
        placeholder="Search for a country..."
        className={darkMode ? "dark-el" : ""}
      />
      <select onChange={searchRegion} className={darkMode ? "dark-el" : ""}>
        <option defaultValue={"all"} value={"all"}>
          All
        </option>
        <option value={"Asia"}>Asia</option>
        <option value={"Africa"}>Africa</option>
        <option value={"Oceania"}>Oceania</option>
        <option value={"Americas"}>Americas</option>
        <option value={"Europe"}>Europe</option>
      </select>
    </div>
  );
};

export default Form;
