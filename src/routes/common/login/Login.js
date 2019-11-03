// Import packages
import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { useAuth } from "components/session";
import { withFirebase } from "components/firebase";
import { SuccessToast } from "components/toast";
import { LoginSocial } from "./containers";

// Import containers
import { LoginQuery } from "./containers";

const Login = ({ firebase }) => {
  // Firebase auth hook
  const { authUser } = useAuth(firebase);

  // User is signed in
  if (authUser) {
    return (
      <>
        {/* Document title */}
        <Helmet title={"Login - Finn"} />
        <SuccessToast text={"You're signed in"} />
        <LoginQuery authUser={authUser} />
      </>
    );
  }

  // User is NOT signed in
  return <LoginSocial />;
};

export default withFirebase(Login);
