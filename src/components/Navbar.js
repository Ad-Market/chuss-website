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
    <>
      <div className={`dark-overlay ${isSideNavActive ? " active" : ""}`}></div>
      <nav id="navbar">
        <div className={`sidenav${isSideNavActive ? " active" : ""}`}>
          <div id="close" onClick={toggleSideBarHandler}>
            &times;
          </div>
          <ul className="nav-sm">
            <li onClick={toggleSideBarHandler}>
              <Link to="/">Dashboard</Link>
            </li>
            <li onClick={toggleSideBarHandler}>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li onClick={toggleSideBarHandler}>
              <Link to="/trade-journal">Trade Journal</Link>
            </li>
          </ul>
        </div>
        <div>
          <img
            onClick={toggleSideBarHandler}
            className="menu"
            src={Hamburger}
            alt="menu"
          />
        </div>
        <ul className="nav">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <li>
            <Link to="/trade-journal">Trade Journal</Link>
          </li>
        </ul>
        <div className="btns-container">
          <a className="btn" href>
            JOIN NOW
          </a>
          <a className="btn" href>
            LOGIN
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
