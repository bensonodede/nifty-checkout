import React from "react";

// Import components
import { FeaturesDescription, FeaturesImage } from "./containers";

// Import styles
import "./styles.scss";

// Import features data
import featuresData from "./featuresData";

const Features = React.forwardRef((props, ref) => (
  <section ref={ref} className="features hero">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        {/* Feature items */}
        {featuresData.map(({ id, header }) => (
          <div key={id} className="column is-10">
            {/* Feature description */}
            <FeaturesDescription header={header} />

            {/* Feature image */}
            <FeaturesImage />
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default Features;
