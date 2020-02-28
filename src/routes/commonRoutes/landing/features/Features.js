import React from "react";

// Import components
import { FeatureItem } from "./containers";

// Import styles
import "./styles.scss";

// Import data
import featuresData from "./featuresData";

const Features = () => (
  <section className="features hero">
    <div className="container">
      <div className="features__item-container">
        {/* List of features */}
        {featuresData.map(item => (
          <FeatureItem item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
