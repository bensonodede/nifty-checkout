// Import Graphql query
import { STORE_SUBSCRIPTION_PLAN_QUERY } from "components/graphql/query";

const getSubscriptionPlan = (storeUsername, apolloClient) => {
  // Run query
  return apolloClient.query({
    query: STORE_SUBSCRIPTION_PLAN_QUERY,
    variables: { storeUsername },
    errorPolicy: "all",
    fetchPolicy: "network-only",
  });
};

export default getSubscriptionPlan;
