import moment from "moment";

// Import graphql operation
import { UPDATE_SUBSCRIPTION_PLAN } from "components/graphql/mutation";

// Check if subscription has expired
const isExpired = (end) => {
  // Get date-time now
  const now = moment().toISOString();

  // Check if date-time now is past end date
  return moment(now).isAfter(end);
};

const checkStatus = ({
  storeSubscriptionPlan: { id, status, start, end },
  match,
  history,
  apolloClient,
}) => {
  // Get store name
  let { storeUsername } = match.params;

  // Subscription status is ACTIVE
  if (status === "active") {
    if (isExpired(end)) {
      // Run mutation
      apolloClient
        .mutate({
          variables: { id, status: "expired" },
          mutation: UPDATE_SUBSCRIPTION_PLAN,
        })
        .then((result) => {
          history.push(`/${storeUsername}/admin/subscription/expired`);
        });
    }
  }

  // Subscription status is expired
  if (status === "expired") {
    history.push(`/${storeUsername}/admin/subscription/expired`);
  }

  // Subscritpion status is NEW
  if (status === "new") {
    history.push(`/${storeUsername}/admin/subscription/new`);
  }
};

export default checkStatus;
