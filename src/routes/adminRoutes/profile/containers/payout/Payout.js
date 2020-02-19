import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { PayoutHeader, PayoutForm } from "./containers";

// Import styles
import "./styles.scss";

const Payout = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Edit payout info · ${storeUsername}`} defer={false} />

      {/* Payout page */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              <PayoutHeader />
              <PayoutForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payout;
