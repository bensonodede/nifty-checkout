import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { androidAdd } from "react-icons-kit/ionicons/androidAdd";

const PricingContent = () => (
  <div className="pricing-content">
    {/* Pricing title */}
    <h1 className="title has-text-centered has-text-white is-size-3-mobile is-size-3-tablet is-size-2-desktop">
      Simple, fair pricing.
    </h1>

    {/* Pricing item */}
    <div className="pricing-content__container">
      {/* Monthly fee */}
      <div className="pricing-content__item">
        <h5 className="has-text-white is-size-5-mobile is-size-4-desktop is-marginless">
          800 <span className="is-size-7 pricing-content__currency">KES</span>
        </h5>
        <h5 className="has-text-white is-marginless is-size-6-mobile is-size-5-desktop">
          Per Month
        </h5>
      </div>

      {/* Pricing plus icon */}
      <div className="pricing-content__icon">
        <Icon icon={androidAdd} size={"100%"} />
      </div>

      {/* Transaction fees */}
      <div className="pricing-content__item">
        <h5 className="has-text-white is-size-5-mobile is-size-4-desktop is-marginless">
          5 <span className="is-size-7 pricing-content__currency">KES</span>
        </h5>
        <h5 className="has-text-white is-marginless is-size-6-mobile is-size-5-desktop">
          Per Transaction
        </h5>
      </div>
    </div>
  </div>
);

export default PricingContent;
