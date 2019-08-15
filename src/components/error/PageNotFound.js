import React from "react";

// Import styles
import "./styles.css";

const PageNotFound = ({ history }) => (
  <div className="App-container page-not-found">
    {/* 404 error title */}
    <h1 className="page-not-found__title">Hmm... This page doesn't exist.</h1>

    {/* 404 error button row */}
    <div className="page-not-found__btn-row">
      {/* Back button */}
      <button onClick={() => history.goBack()} className="page-not-found__btn">
        Back
      </button>

      {/* Home button */}
      <button
        onClick={() => history.push("/")}
        className="
        page-not-found__btn 
        page-not-found__btn-clear
        "
      >
        Home
      </button>
    </div>

    {/* 404 error image */}
    <img
      className="page-not-found__img"
      alt={"page not found"}
      src={require("../../images/pablo-fatal-error.png")}
    />
  </div>
);

export default PageNotFound;
