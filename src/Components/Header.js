import React from "react";
import { useCountries } from "../contexts/GlobalCountries";

const Header = () => {
  const { onClickBtn, darkMode } = useCountries();

  const handleDarkMode = () => {
    onClickBtn();
  };

  return (
    <header className={darkMode ? "dark-el navbar" : "navbar"}>
      <h3>Where In The World?</h3>
      <button onClick={handleDarkMode}>
        <i className={`bi bi-${darkMode ? "moon-fill" : "moon"}`} /> Dark Mode
      </button>
    </header>
  );
};

export default Header;
