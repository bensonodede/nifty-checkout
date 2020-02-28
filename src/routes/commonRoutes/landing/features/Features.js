import React from "react";

// Import components
import { FeatureItem } from "./containers";

// Import styles
import "./styles.scss";

// Import data
import featuresData from "./featuresData";

const Features = React.forwardRef((props, ref) => (
  <section ref={ref} className="features hero">
    <div className="container">
      {/* List of features */}
      {featuresData.map(item => (
        <FeatureItem item={item} />
      ))}
    </div>
  </section>
));

export default Features;
