import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

// Import components
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";

// Import GraphQL login query
import { LOGIN_QUERY } from "components/graphql/query";

const LoginQuery = ({ authUser }) => {
  // Destructure unique user ID
  const { uid } = authUser;

  // Query user store
  const { loading, error, data } = useQuery(LOGIN_QUERY, {
    variables: { uid },
    fetchPolicy: "network-only",
  });

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error) {
    return <ErrorToast emoji={"💩"} text={"No internet connection"} />;
  }

  // Get User store from data
  let { stores } = data.login;

  // Store exists
  if (stores[0]) {
    let { storeUsername } = stores[0];

    // Redirect to dashboard
    return <Redirect to={`/${storeUsername}/admin/`} />;
  }

  // Store does NOT exist
  else {
    // Redirect to create-store page
    return <Redirect to={`/create-store`} />;
  }
};

export default LoginQuery;
