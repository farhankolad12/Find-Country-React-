import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Border = ({ border }) => {
  const [returnBorder, setBorder] = useState();

  function getBorder() {
    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res) => res.json())
      .then((data) => setBorder(data));
  }

  useEffect(() => {
    getBorder();
  }, []);

  return (
    <>
      {returnBorder && (
        <Link
          to={`/${returnBorder[0].name.common
            .replaceAll(" ", "-")
            .toLowerCase()}`}
        >
          {returnBorder[0].name.common}
        </Link>
      )}
    </>
  );
};

export default Border;
