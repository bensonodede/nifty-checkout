import React from "react";

// Import pricing table
import PricingTableDesktop from "./PricingTableDesktop";

// Import pricing data
const data = require("../pricing.json");

const PricingDesktop = () => (
  <div className="columns is-centered">
    <div className="column is-12">
      <div className="columns is-centered">
        {/* Basic plan */}
        <div className="column">
          <PricingTableDesktop data={data[0]} />
        </div>

        {/* Standard plan */}
        <div className="column">
          <PricingTableDesktop data={data[1]} />
        </div>

        {/* Premium plan */}
        <div className="column">
          <PricingTableDesktop data={data[2]} />
        </div>
      </div>
    </div>
  </div>
);

export default PricingDesktop;
