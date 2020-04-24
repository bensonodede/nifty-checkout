import React from "react";

// Import components
import { Loader } from "components/loader";

const SubscriptionActivateWaitingMobile = () => (
  <div className="subscription-activate-waiting-mobile">
    <Loader />
    <h5 className="is-size-5-mobile">Waiting for payment</h5>
  </div>
);

export default SubscriptionActivateWaitingMobile;
