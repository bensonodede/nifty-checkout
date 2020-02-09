import React from "react";

// Policy accordion header
const PolicyAccordionHeader = ({ emoji, title }) => (
  <p className="is-marginless is-size-6 has-text-grey-light">
    <span
      role="img"
      aria-label="emoji"
      className="policy-accordion-header__emoji"
    >
      {emoji}
    </span>{" "}
    {title}
  </p>
);

export default PolicyAccordionHeader;
