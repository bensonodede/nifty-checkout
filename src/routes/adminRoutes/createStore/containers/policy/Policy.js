import React from "react";

// Import components
import PolicyHeader from "./PolicyHeader";
import PolicyDescription from "./PolicyDescription";
import PolicyField from "./PolicyField";

const Policy = ({
  isValid,
  touched: {
    payoutNumber: touchedPayoutNumber,
    phoneNumber: touchedPhoneNumber,
    storeName: touchedStoreName,
    storeUsername: touchedStoreUsername,
    policyDelivery: touchedPolicyDelivery,
    policyReturns: touchedPolicyReturns
  }
}) => (
  <div className="route-wrapper-landing">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        <div className="column is-10-mobile is-8-tablet is-4-desktop">
          <PolicyHeader />
          <PolicyDescription />
          <PolicyField
            isValid={
              !!(
                isValid &&
                touchedPayoutNumber &&
                touchedPhoneNumber &&
                touchedStoreName &&
                touchedStoreUsername &&
                touchedPolicyDelivery &&
                touchedPolicyReturns
              )
            }
          />
        </div>
      </div>
    </div>
  </div>
);

export default Policy;
