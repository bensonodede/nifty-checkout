import React from "react";

// Import components
import { Loader } from "components/loader";

const SubscriptionActivateWaitingDesktop = () => (
  <div className="subscription-activate-waiting-desktop">
    <Loader />
    <h5 className="is-size-5">Waiting for payment</h5>
  </div>
);

export default SubscriptionActivateWaitingDesktop;
