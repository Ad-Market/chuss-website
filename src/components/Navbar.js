import React, { useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  const toggleSideBarHandler = (e) => {
    e.preventDefault();

    setIsSideNavActive((prevState) => !prevState);
  };

  return (
    <nav id="navbar">
      <div className={`sidenav${isSideNavActive ? " active" : ""}`}>
        <div id="close" onClick={toggleSideBarHandler}>
          &times;
        </div>
      </div>
      <div>
        <img
          onClick={toggleSideBarHandler}
          className="menu"
          src={Hamburger}
          alt="menu"
        />
      </div>
      <ul class="nav">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="watchlist">Watchlist</Link>
        </li>
        <li>
          <Link to="/trade-journal">Trade Journal</Link>
        </li>
      </ul>
      <div class="btns-container">
        <a class="btn" href>
          JOIN NOW
        </a>
        <a class="btn" href>
          LOGIN
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
