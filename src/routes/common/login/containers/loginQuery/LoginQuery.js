import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

// Import components
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";

// Import GraphQL login query
import { LOGIN_QUERY } from "components/graphql/query";
import { Mixpanel } from "components/mixpanel";

// Import functions
import IdentifyUser from "./IdentifyUser";

const LoginQuery = ({ authUser }) => {
  // Destructure unique user ID
  const { uid } = authUser;

  // Query user store
  const { loading, error, data } = useQuery(LOGIN_QUERY, {
    variables: { uid }
  });

  // Loading state
  if (loading) {
    return <PageLoader text={"We're setting up your store..."} />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} />;
  }

  // Identify user in mixpanel
  IdentifyUser(authUser);

  // Get User store from data
  let { stores } = data.login;

  // Store exists
  if (stores[0]) {
    let { storeName } = stores[0];

    // Track new login
    Mixpanel.track("Login");

    // Redirect to dashboard
    return <Redirect to={`/${storeName}/admin/`} />;
  }

  // Store does NOT exist
  else {
    // Track new sign up
    Mixpanel.track("Login without store");

    // Redirect to signup page
    return <Redirect to={`/signup`} />;
  }
};

export default LoginQuery;
