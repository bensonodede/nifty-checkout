import React from "react";
import { useMutation } from "@apollo/react-hooks";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { locked } from "react-icons-kit/ionicons/locked";
import { ErrorToast } from "components/toast";
import SubscriptionActivateWaiting from "./subscriptionActivateWaiting";

// Import graphql operations
import { ACTIVATE_SUBSCRIPTION_PLAN } from "components/graphql/mutation";

const SubscriptionActivateFooter = ({ storeUsername, payoutNumber }) => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(
    ACTIVATE_SUBSCRIPTION_PLAN
  );

  return (
    <>
      {/* Desktop footer */}
      <div className="column is-10-tablet is-10-desktop is-hidden-mobile has-text-left">
        <div className="columns">
          <div className="column is-4-tablet">
            <Button
              isLoading={loading}
              isFullWidth={true}
              isLight={true}
              onClick={() =>
                // Run mutation to activate subscription plan
                mutate({
                  variables: { storeUsername, payoutNumber },
                })
              }
            >
              <div className="subscription-activate-footer__btn">
                <div className="subscription-activate-footer__icon">
                  <Icon icon={locked} size={"100%"} />
                </div>
                Confirm and pay
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile footer*/}
      <div className="subscription-activate-footer is-hidden-tablet">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile">
              <Button
                isLoading={loading}
                isFullWidth={true}
                isLight={true}
                onClick={() =>
                  // Run mutation to activate subscription plan
                  mutate({
                    variables: { storeUsername, payoutNumber },
                  })
                }
              >
                <div className="subscription-activate-footer__btn">
                  <div className="subscription-activate-footer__icon">
                    <Icon icon={locked} size={"100%"} />
                  </div>
                  Confirm and pay
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Waiting modal */}
      {data && (
        <SubscriptionActivateWaiting data={data.activateSubscriptionPlan} />
      )}

      {/* Error toast */}
      {error && <ErrorToast text={"M-pesa request failed"} emoji={"💩"} />}
    </>
  );
};

export default SubscriptionActivateFooter;
