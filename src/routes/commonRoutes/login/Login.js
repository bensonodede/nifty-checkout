// Import packages
import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { useAuth } from "components/session";
import { withFirebase } from "components/firebase";
import { PageLoader } from "components/loader";
import { SuccessToast } from "components/toast";
import { LoginSocial } from "./containers";

// Import containers
import { LoginQuery } from "./containers";

const Login = ({ firebase }) => {
  // Firebase auth hook
  const { authUser, initializing } = useAuth(firebase);

  // User is signed in
  if (!!authUser && !initializing) {
    return (
      <>
        {/* Document title */}
        <Helmet title={"Login - Finn"} />
        <SuccessToast emoji={"👍"} text={"You're signed in"} />
        <LoginQuery authUser={authUser} />
      </>
    );
  }

  // User is NOT signed in
  else if (!!!authUser && !initializing) {
    return <LoginSocial />;
  }

  return <PageLoader />;
};

export default withFirebase(Login);
