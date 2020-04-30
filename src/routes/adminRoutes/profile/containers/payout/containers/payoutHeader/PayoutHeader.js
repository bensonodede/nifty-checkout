import React from "react";

const PayoutHeader = () => (
  <>
    {/* Title */}
    <h1 className="title is-size-3 is-marginless">Edit your payout method</h1>

    {/* Sub-title */}
    <p className="has-text-grey-light is-size-6">
      This is where we'll send all the money you earn from making sales.{" "}
      <span role="img" aria-label={"emoji"}>
        💸
      </span>
    </p>
  </>
);

export default PayoutHeader;
