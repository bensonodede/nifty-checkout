import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { androidAdd } from "react-icons-kit/ionicons/androidAdd";

const PricingContent = () => (
  <>
    {/* Pricing title */}
    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered">
      Simple, fair pricing.
    </h1>

    {/* Pricing item */}
    <div className="pricing-content__container">
      {/* Monthly fee */}
      <div className="pricing-content__item">
        <h5 className="title is-size-5-mobile is-size-4-tablet is-size-4-desktop is-marginless has-text-centered">
          A fixed monthly fee
        </h5>
        <p className="is-size-6 has-text-centered has-text-grey-light">
          No contracts. <br /> No strings attached.
        </p>

        {/*  */}
        <div className="pricing-content__main">
          <h1 className="pricing-content__price title is-size-3-mobile is-size-2-tablet is-size-1-desktop is-marginless">
            800 <span className="pricing-content__currency">KES</span>
          </h1>
          <h5 className="title is-size-6 is-marginless has-text-centered">
            per active store <br /> per month
          </h5>
        </div>

        <p className="is-size-6 has-text-centered has-text-grey-light is-marginless">
          You can cancel anytime. We are pretty sure you'll love it though.{" "}
          <br />
          <span aria-label="heart emoji" role="img">
            ❤️
          </span>
        </p>
      </div>

      {/* Pricing plus icon */}
      <div className="pricing-content__and">
        <h1 className="title is-size-5-mobile is-size-4-tablet is-size-4-desktop">
          and
        </h1>
      </div>

      {/* Transaction fees */}
      <div className="pricing-content__item">
        <h5 className="title is-size-5-mobile is-size-5-tablet is-size-4-desktop is-marginless has-text-centered">
          Tiny transaction fees
        </h5>
        <p className="is-size-6 has-text-centered has-text-grey-light">
          No surprises. <br /> No hidden fees.
        </p>

        {/*  */}
        <div className="pricing-content__main">
          <h1 className="pricing-content__price title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered is-marginless">
            5 <span className="pricing-content__currency">KES</span>
          </h1>
          <h5 className="title is-size-6 is-marginless has-text-centered">
            per successful <br /> sale
          </h5>
        </div>

        <p className="is-size-6 has-text-centered has-text-grey-light is-marginless">
          You can cancel anytime. We are pretty sure you'll love it though.{" "}
          <br />
          <span aria-label="heart emoji" role="img">
            🎉
          </span>
        </p>
      </div>
      {/*  */}
    </div>
  </>
);

export default PricingContent;
