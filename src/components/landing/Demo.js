import React from "react";

const Demo = () => (
  <div className="demo">
    <div className="divider" />
    <h1 className="demo__title">See it in action</h1>
    <p className="demo__text">This is what your customers will see.</p>

    <div className="demo__product">
      {/* Product demo mockup */}
      <img
        className="demo__mockup"
        alt={"demo__mockup"}
        src={require("../../images/iphone_x_mockup.png")}
      />
      {/* Product demo GIF */}
      <div className="demo__gif-container">
        <img
          className="demo__gif"
          alt={"demo__gif"}
          src={require("../../images/Product-demo.gif")}
        />
      </div>
    </div>
  </div>
);

export default Demo;
