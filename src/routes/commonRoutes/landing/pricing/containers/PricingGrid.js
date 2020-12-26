import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import PricingItem from "./PricingItem";

// Import features data
import PricingData from "./PricingData";
import Button from "components/button";

const PricingGrid = ({ history }) => (
  <div className="pricing-grid">
    {/* First pricing plan */}
    <div className="pricing-grid__item">
      {/* Title */}
      <h5 className="title is-size-7-mobile is-size-7-tablet is-size-6-desktop is-marginless has-text-grey-light">
        SIDE-HUSTLE
      </h5>

      {/* Pricing */}
      <h1 className="title is-size-3-mobile is-size-3-tablet is-size-2-desktop pricing-grid__price">
        Free
      </h1>

      {/* Features list */}
      {PricingData[0].features.map((feature, index) => (
        <PricingItem feature={feature} key={index} available={true} />
      ))}
      {PricingData[0].nullFeatures.map((feature, index) => (
        <PricingItem feature={feature} key={index} available={false} />
      ))}

      {/* Login button */}
      <Button
        type={"button"}
        isFullWidth
        className="pricing-grid__item-button"
        onClick={() => history.push("/login")}
      >
        Start selling with finn
      </Button>
    </div>

    {/* Second pricing plan */}
    <div className="pricing-grid__item">
      {/* Title */}
      <h5 className="title is-size-7-mobile is-size-7-tablet is-size-6-desktop is-marginless has-text-grey-light">
        BUSINESS
      </h5>

      {/* Pricing */}
      <h1 className="title is-size-3-mobile is-size-3-tablet is-size-2-desktop pricing-grid__price">
        1,500
        <span className="pricing-grid__price-currency is-size-7-mobile is-size-7-tablet is-size-6-desktop">
          <span>KSH</span>
          <span>PER MONTH</span>
        </span>
      </h1>

      {/* Features list */}
      {PricingData[1].features.map((feature, index) => (
        <PricingItem feature={feature} key={index} available={true} />
      ))}

      {/* Login button */}
      <Button
        type={"button"}
        isFullWidth
        className="pricing-grid__item-button"
        onClick={() => history.push("/login")}
      >
        Try for free
      </Button>
    </div>
  </div>
);

export default withRouter(PricingGrid);
