import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalCountries } from "./contexts/GlobalCountries";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalCountries>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalCountries>
  </React.StrictMode>
);
