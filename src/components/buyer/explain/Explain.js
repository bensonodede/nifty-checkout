import React from "react";

// Import styles
import "./styles.css";

const Explain = () => (
  <div className="App-container explain">
    {/* Explain image*/}
    <div className="explain__img-container">
      <img
        className="explain__img"
        alt={"no_internet"}
        src={require("../../../images/pablo-come-back-later.png")}
      />
    </div>

    {/* Explain title */}
    <h1 className="explain__title">What is this?</h1>
  </div>
);

export default Explain;
