import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Breakpoint } from "react-socks";

// Import components
import { useModal } from "components/modal";
import { BottomModal, CenterModal } from "components/modal";
import { ErrorToast } from "components/toast";
import SubscriptionActivateWaitingMobile from "./SubscriptionActivateWaitingMobile";
import SubscriptionActivateWaitingDesktop from "./SubscriptionActivateWaitingDesktop";

// Import graphql operations
import { SUBSCRIPTION_PLAN_PAYMENT_POLL_QUERY } from "components/graphql/query";

const SubscriptionActivateWaiting = ({ data: { id }, match, history }) => {
  // Get store name
  let { storeUsername } = match.params;

  // Destructure hooks
  const [skip, setSkip] = useState(false);
  const [isOpen, toggleModal] = useModal(false);

  // Open modal on mount
  useEffect(() => {
    toggleModal();
  }, [skip]);

  // Poll for subscription plan payment (every 0.5 seconds)
  const { error, data } = useQuery(SUBSCRIPTION_PLAN_PAYMENT_POLL_QUERY, {
    variables: { id },
    pollInterval: 500,
    skip,
  });

  if (data) {
    // If payment is cancelled, close modal
    if (!data.subscriptionPlanPaymentPoll) {
      setSkip(true);
    }

    // If payment succeeds, navigate to success page
    if (data.subscriptionPlanPaymentPoll) {
      if (data.subscriptionPlanPaymentPoll.mpesaReceiptNumber) {
        history.push(`/${storeUsername}/admin/subscription/success`);
      }
    }
  }

  return (
    <>
      {/* Mobile modal */}
      <Breakpoint mobile only>
        <BottomModal isOpen={isOpen} toggleModal={null}>
          <SubscriptionActivateWaitingMobile />
        </BottomModal>
      </Breakpoint>

      {/* Tablet and desktop modal */}
      <Breakpoint tablet up>
        <CenterModal isOpen={isOpen} toggleModal={null}>
          <SubscriptionActivateWaitingDesktop />
        </CenterModal>
      </Breakpoint>

      {/* Error toast */}
      {error && <ErrorToast text={"No internet connection"} emoji={"💩"} />}
    </>
  );
};

export default withRouter(SubscriptionActivateWaiting);
