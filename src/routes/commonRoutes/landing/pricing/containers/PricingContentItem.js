import React from "react";

const PricingContentItem = ({ title }) => (
  <div className="pricing-content__item">
    {/* Content title */}
    <h5 className="title is-size-5-mobile is-size-4-desktop is-marginless has-text-centered">
      A fixed monthly fee
    </h5>

    {/* Content sub-title */}
    <p className="is-size-6 has-text-centered has-text-grey-light">
      No contracts. <br /> No strings attached.
    </p>

    {/* Content price */}
    <div className="pricing-content__main">
      <h1 className="pricing-content__price title is-size-3-mobile is-size-3-tablet is-size-1-desktop is-marginless">
        800 <span className="pricing-content__currency">KES</span>
      </h1>
      <h5 className="title is-size-6 is-marginless has-text-centered">
        per active store <br /> per month
      </h5>
    </div>

    {/* Content footer */}
    <p className="is-size-6 has-text-centered has-text-grey-light is-marginless">
      You can cancel anytime. We are pretty sure you'll love it though. <br />
      <span aria-label="heart emoji" role="img">
        ❤️
      </span>
    </p>
  </div>
);

export default PricingContentItem;
