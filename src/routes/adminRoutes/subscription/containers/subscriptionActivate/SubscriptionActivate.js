import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/react-hooks";

// Import components
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import {
  SubscriptionActivateHeader,
  SubscriptionActivateFooter,
  SubscriptionActivateImage,
} from "./containers";

// Import graphql operation
import { STORE_QUERY } from "components/graphql/query";

// Import styles
import "./styles.scss";

const SubscriptionActivate = ({ match, location }) => {
  // Destructure route params
  let { storeUsername } = match.params;
  let payoutNumber;

  // Get store details
  const { loading, error, data } = useQuery(STORE_QUERY, {
    variables: { storeUsername },
    // Skip query if phone number is in state (from the form)
    skip: !!location.state,
  });

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  // Handle query result
  if (data) {
    // Define payout number
    payoutNumber = data.store.payoutNumber;
  }

  // Get number from phone number form if filled in
  if (location.state) {
    // Define payout number
    payoutNumber = location.state.phoneNumber;
  }

  // Format payout number for readability
  let payoutNumberMasked = payoutNumber.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{3})$/g,
    "+$1 ($2) $3 $4"
  );

  return (
    <>
      {/* Document title */}
      <Helmet title={`Pay with M-pesa · ${storeUsername}`} defer={false} />

      <div className="subscription-activate">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-10-tablet is-7-desktop">
              <div className="columns is-mobile is-multiline is-centered">
                {/* Header */}
                <SubscriptionActivateHeader
                  storeUsername={storeUsername}
                  payoutNumberMasked={payoutNumberMasked}
                />

                {/* Footer */}
                <SubscriptionActivateFooter
                  storeUsername={storeUsername}
                  payoutNumber={payoutNumber}
                />
              </div>
            </div>

            <div className="column is-7-mobile is-10-tablet is-3-desktop">
              <div className="columns is-mobile is-multiline is-centered">
                {/* M-pesa image */}
                <SubscriptionActivateImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionActivate;
