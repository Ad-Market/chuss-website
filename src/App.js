import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import $ from "jquery";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Watchlist from "./components/WatchList";
import TradeJournal from "./components/TradeJournal";

function App() {
  const toggleSideBarHandler = (e) => {
    e.preventDefault();
    if ($(".sidenav").hasClass("show")) {
      $("#main").attr("style", "");
      $(".sidenav").removeClass("show");
    } else {
      $("#main").attr(
        "style",
        "transform: translateX(" + $(".sidenav").outerWidth() + "px)"
      );
      $(".sidenav").addClass("show");
    }
  };
  return (
    <>
      <Router>
        <Navbar toggleSideBarHandler={toggleSideBarHandler} />
        <div id="main">
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
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/watchlist">
              <Watchlist />
            </Route>
            <Route exact path="/trade-journal">
              <TradeJournal />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
