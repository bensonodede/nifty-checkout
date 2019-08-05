import React from "react";

const Features = () => (
  <div className="landing__features">
    {/* First feature */}
    <div className="feature">
      {/* Feature image */}
      <div className="feature__img-container">
        <img
          className="feature__img"
          alt={"Increase sales"}
          src={require("../../images/Jeans-Butt.gif")}
        />
      </div>

      {/* Feature header */}
      <h1 className="feature__title">Feature one</h1>

      {/* Feature text */}
      <p className="feature__text">This is the first feature</p>
    </div>
  </div>
);

export default Features;
