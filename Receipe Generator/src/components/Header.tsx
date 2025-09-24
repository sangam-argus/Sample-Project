import React from "react";
import SearchBar from "./SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="headerContainer">
      <h3> Food Receipe </h3>
      <div>
        <SearchBar />
      </div>

      <ul className="navlinks">
        <li>
          <Link to={"/"} className="linksStyle">Home</Link>
        </li>
        <li>
          <Link to={"/favourites"}  className="linksStyle">Favourite</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
