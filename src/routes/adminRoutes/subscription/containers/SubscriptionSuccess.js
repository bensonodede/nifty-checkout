import React from "react";
import moment from "moment";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/react-hooks";

// Import components
import Button from "components/button";
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";

// Import graphql operations
import { STORE_SUBSCRIPTION_PLAN_QUERY } from "components/graphql/query";

//! DOES NOT FETCH LATEST DATE (NEEDS FIX)
const SubscriptionSuccess = ({ match, history }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  // Query for store subscription plan
  const { loading, error, data } = useQuery(STORE_SUBSCRIPTION_PLAN_QUERY, {
    variables: { storeUsername },
    fetchPolicy: "network-only",
  });

  // Handle loading state
  if (loading) {
    return <PageLoader />;
  }

  // Handle error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  // Destructure data
  let { end } = data.storeSubscriptionPlan;

  // Define active duration
  let activeDuration = moment(end).fromNow(true);

  return (
    <>
      {/* Document title */}
      <Helmet title={`Successful payment · ${storeUsername}`} defer={false} />

      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-8-tablet">
              {/* Emoji */}
              <span className="title is-size-3" aria-label="emoji" role="img">
                🎉
              </span>

              {/* Title */}
              <h1 className="title is-size-3">You are good to go! </h1>

              {/* Description */}
              <p className="is-size-6">
                Your subscription is now active for{" "}
                <span className="title is-size-6">{activeDuration}. </span>
                We are super excited to have you on board! Have fun building
                your brand.{" "}
                <span aria-label="emoji" role="img">
                  💯
                </span>
              </p>

              {/* Button to navigate home */}
              <Button onClick={() => history.push(`/${storeUsername}/admin/`)}>
                Take me home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionSuccess;
