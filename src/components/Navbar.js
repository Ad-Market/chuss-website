import React from "react";
import { Link } from "react-router-dom";

import Hamburger from "../assets/hamburger.png";

const Navbar = ({ toggleSideBarHandler }) => {
  return (
    <>
      <div className={`dark-overlay`}></div>

      <nav id="navbar">
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
