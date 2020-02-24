import React from "react";

// Import components
import PayoutHeader from "./PayoutHeader";
import PayoutField from "./PayoutField";
import PayoutDescripton from "./PayoutDescription";

const Payout = ({
  isValid,
  values: { payoutMethod },
  touched: { payoutNumber: touchedPayoutNumber }
}) => (
  <div className="route-wrapper">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        <div className="column is-10-mobile is-8-tablet is-4-desktop">
          <PayoutHeader />
          <PayoutDescripton />
          <PayoutField
            payoutMethod={payoutMethod}
            isValid={!!(isValid && touchedPayoutNumber)}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Payout;