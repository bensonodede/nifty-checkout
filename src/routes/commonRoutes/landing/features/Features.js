import React from "react";

// Import components
import { FeaturesHeader, FeatureItem } from "./containers";

// Import styles
import "./styles.scss";

// Import data
import featuresData from "./featuresData";

const Features = () => (
  <section className="features hero">
    <div className="container">
      {/* Features header */}
      <FeaturesHeader />

      <div className="features__item-container">
        {/* List of features */}
        {featuresData.map(item => (
          <FeatureItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
