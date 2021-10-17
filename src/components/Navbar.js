import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import Hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const toggleSideBarHandler = (e) => {
    e.preventDefault();
    if ($(".sidenav").hasClass("show")) {
      $("body").attr("style", "transform: translateX(0)");
      $(".sidenav").removeClass("show");
    } else {
      $("body").attr(
        "style",
        "transform: translateX(" + $(".sidenav").outerWidth() + "px)"
      );
      $(".sidenav").addClass("show");
    }
  };

  return (
    <>
      <div className={`dark-overlay`}></div>
      <div className="sidenav">
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
