import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const countries = [
    "Argentina",
    "France",
    "Brazil",
    "China",
    "Greece",
    "Portugal",
  ];

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Countries
          <ul>
            {countries.map((country) => {
              return (
                /* Map pour afficher chaque pays */
                <li key={country}>
                  <Link to={`/countries/${country}`}>{country}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
