import React from "react";

// Import components
import { FeaturesHeader, FeatureItem } from "./containers";

// Import styles
import "./styles.scss";

// Import data
import featuresData from "./featuresData";

const Features = () => (
  <section className="hero">
    <div className="hero-body features-hero--body">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          {/* Features header */}
          <FeaturesHeader />

          {/* List of features */}
          <div className="features__item-container">
            {featuresData.map((item) => (
              <FeatureItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
