import React from "react";

const PricingHeader = () => (
  <>
    {/* Title */}
    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered">
      It's free to get started
    </h1>

    {/* Sub-title */}
    <p className="has-text-centered is-size-6-mobile is-size-4-tablet is-size-4-desktop has-text-grey-light is-marginless">
      And it's easy. Two things everyone loves.{" "}
      <span aria-label="heart emoji" role="img">
        ❤️
      </span>
    </p>
  </>
);

export default PricingHeader;
