import React from "react";

// Import components
import { PricingHeader, PricingGrid } from "./containers";

// Import styles
import "./styles.scss";

const Pricing = () => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-12-mobile is-10-tablet is-11-desktop">
            {/* Header */}
            <PricingHeader />

            {/* Grid */}
            <PricingGrid />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
