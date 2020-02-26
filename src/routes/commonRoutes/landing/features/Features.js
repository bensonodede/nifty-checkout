import React from "react";

// Import components
import { FeatureStore, FeatureSocial, FeatureDashboard } from "./containers";

// Import styles
import "./styles.scss";

const Features = React.forwardRef((props, ref) => (
  <section ref={ref} className="features hero">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        {/*  */}
        <FeatureStore />

        {/*  */}
        <FeatureSocial />

        {/*  */}
        <FeatureDashboard />
      </div>
    </div>
  </section>
));

export default Features;
