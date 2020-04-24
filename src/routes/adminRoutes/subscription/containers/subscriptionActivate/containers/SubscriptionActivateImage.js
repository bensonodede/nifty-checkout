import React from "react";

// Import components
import MpesaOutline from "images/mpesa-outline.png";

const SubscriptionActivateImage = () => (
  <div className="column is-5-tablet is-10-desktop">
    <div className="subscription-activate-image">
      <div className="subscription-activate-image__overlay" />
      <img src={MpesaOutline} alt={"Confirm M-pesa payment"} />
    </div>
  </div>
);

export default SubscriptionActivateImage;
