import React from "react";

const PricingContent = () => (
  <>
    {/* Pricing title */}
    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered">
      Simple, fair pricing.
    </h1>
    <p className="has-text-centered is-size-5-mobile is-size-4-tablet is-size-4-desktop has-text-grey-light is-marginless">
      Try Finn for free for 14 days. No credit card needed.
    </p>

    {/* Pricing item */}
    <div className="pricing-content__container">
      {/* Monthly fee */}
      <div className="pricing-content__item">
        {/* Pricing item body */}
        <div className="pricing-content__main">
          <h1 className="pricing-content__price title is-size-3-mobile is-size-3-tablet is-size-2-desktop">
            2,500 <span className="pricing-content__currency">KES</span>
          </h1>
          <h5 className="title is-size-6-mobile is-size-6-tablet is-size-5-desktop is-marginless has-text-centered">
            per month
          </h5>
        </div>

        {/* Pricing item footer */}
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
        <h1 className="title is-size-5-mobile is-size-5-tablet is-size-4-desktop">
          and
        </h1>
      </div>

      {/* Transaction fees */}
      <div className="pricing-content__item">
        {/* Pricing item body */}
        <div className="pricing-content__main">
          <h1 className="pricing-content__price title is-size-3-mobile is-size-3-tablet is-size-2-desktop">
            5 <span className="pricing-content__currency">KES</span>
          </h1>
          <h5 className="title is-size-6-mobile is-size-6-tablet is-size-5-desktop is-marginless has-text-centered">
            per successful <br /> sale
          </h5>
        </div>

        {/* Pricing item footer */}
        <p className="is-size-6 has-text-centered has-text-grey-light is-marginless">
          This covers all the transaction fees.
          <br />
          <span aria-label="money wings emoji" role="img">
            💸
          </span>
        </p>
      </div>
    </div>
  </>
);

export default PricingContent;
