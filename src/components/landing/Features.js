import React from "react";

// Import json files
const data = require("./features.json");

const Features = () => (
  <div className="features">
    <div className="divider" />
    <h1 className="features__title">Features</h1>

    {/* Map each feature item */}
    {data.map(item => (
      <div key={item.id}>
        <img className="features__img" alt={item.imgUrl} src={item.imgUrl} />
        <div className="features__content">
          <h1 className="features__sub-title">{item.header}</h1>
          <p className="features__text">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Features;
