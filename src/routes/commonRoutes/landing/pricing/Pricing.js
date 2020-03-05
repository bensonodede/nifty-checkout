import React from "react";

// Import components
import { PricingContent } from "./containers";

// Import styles
import "./styles.scss";

const Pricing = () => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-11-mobile is-7-tablet is-9-desktop">
            {/* Content */}
            <PricingContent />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
