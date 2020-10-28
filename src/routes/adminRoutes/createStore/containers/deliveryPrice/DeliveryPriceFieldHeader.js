import React from "react";

// Delivery accordion header
const DeliveryPriceFieldHeader = ({ emoji, title }) => (
  <h5 className="is-size-6 policy">
    <span
      role="img"
      aria-label="emoji"
      className="policy-accordion-header__emoji"
    >
      {emoji}
    </span>{" "}
    {title}
  </h5>
);

export default DeliveryPriceFieldHeader;
