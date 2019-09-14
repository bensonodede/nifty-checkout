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
        alt={"demo mockup"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566397303/web_assets/iphone_x_mockup.png"
        }
      />

      {/* Product demo GIF */}
      <div className="demo__gif-container">
        <video autoPlay loop muted={"muted"} className="demo__gif">
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/dzxuz9zc9/video/upload/q_auto/v1566383113/web_assets/Product-demo.mp4"
          />
        </video>
      </div>
    </div>
  </div>
);

export default Demo;
