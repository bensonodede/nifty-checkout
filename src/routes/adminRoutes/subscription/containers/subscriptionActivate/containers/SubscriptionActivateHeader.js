import React from "react";
import { Link } from "react-router-dom";

const SubscriptionActivateHeader = ({ payoutNumberMasked, storeUsername }) => (
  <div className="column is-10-tablet is-10-desktop">
    <h1 className="title is-size-3-mobile">You're almost there.</h1>
    <p>
      Once you press confirm, M-pesa will prompt your phone on{" "}
      <span className="title is-size-6">{payoutNumberMasked}.</span> Enter your
      pin to complete the transaction.
    </p>

    {/*  */}

    <Link to={`/${storeUsername}/admin/subscription/phone-number`}>
      <h5 className="has-text-primary is-size-6">Change phone number?</h5>
    </Link>
  </div>
);

export default SubscriptionActivateHeader;
