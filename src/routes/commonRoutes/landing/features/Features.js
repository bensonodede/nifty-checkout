import React from "react";

// Import styles
import "./styles.scss";

// Import features data
import featuresData from "./featuresData";

const Features = () => (
  <section className="features hero">
    <div className="container">
      {/* Feature items */}
      {featuresData.map(item => (
        <div key={item.id} className="features__grid">
          {/* Feature image */}
          <div className="features__grid-item">
            <div className="features__img-container">
              <img
                className="features__img"
                alt={`feature-${item.header}`}
                src={item.imgUrl}
              />
            </div>
          </div>

          {/* Feature description */}
          <div className="features__grid-item">
            <h1 className="title is-size-2-desktop is-marginless">
              {item.header}
            </h1>
            <p className="is-size-5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
