import React from "react";

const PayoutHeader = () => (
  <div className="account__header">
    {/* Title */}
    <h1 className="title is-size-3 is-marginless">Payouts</h1>

    {/* Sub-title */}
    <p className="has-text-grey-light is-size-6">
      This is where we'll send all the money you earn from making sales.{" "}
      <span role="img" aria-label={"emoji"}>
        💸
      </span>
    </p>
  </div>
);

export default PayoutHeader;
