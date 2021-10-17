import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Watchlist from "./components/WatchList";
import TradeJournal from "./components/TradeJournal";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="m-main"></div>
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
      </Router>
    </>
  );
}

export default App;
