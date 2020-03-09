import React from "react";

// Policy accordion header
const PolicyFieldHeader = ({ emoji, title }) => (
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

export default PolicyFieldHeader;
