import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useCountries } from "./contexts/GlobalCountries";
import Home from "./Components/Home";
import CountryDetail from "./Components/CountryDetail";

function App() {
  const { allCountries, darkMode } = useCountries();

  darkMode
    ? document.querySelector("body").classList.add("dark-back")
    : document.querySelector("body").classList.remove("dark-back");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {allCountries.map((country) => {
          return (
            <Route
              key={country.name.common}
              path={`/${country.name.common
                .replaceAll(" ", "-")
                .toLowerCase()}`}
              element={<CountryDetail country={country} />}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
