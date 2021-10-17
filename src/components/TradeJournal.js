import React from "react";

const TradeJournal = () => {
  return (
    <div id="trade-journal">
      <h1>Trade Journal</h1>
      <div className="container">
        <button className="trade-btn">add trade</button>
        <div className="shapes">
          <div className="rectangle-md">
            <h2>table with pagination and auto refresh</h2>
            <h2>
              I want to be able to add trades, edit trades and close trades
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeJournal;
