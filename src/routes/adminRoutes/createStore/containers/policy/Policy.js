import React from "react";

// Import components
import PolicyHeader from "./PolicyHeader";
import PolicyDescription from "./PolicyDescription";
import PolicyField from "./PolicyField";

const Policy = ({
  isValid,
  touched: {
    policyDelivery: touchedPolicyDelivery,
    policyReturns: touchedPolicyReturns
  }
}) => (
  <div className="route-wrapper">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        <div className="column is-10-mobile is-8-tablet is-4-desktop">
          <PolicyHeader />
          <PolicyDescription />
          <PolicyField
            isValid={
              !!(isValid && touchedPolicyDelivery && touchedPolicyReturns)
            }
          />
        </div>
      </div>
    </div>
  </div>
);

export default Policy;
