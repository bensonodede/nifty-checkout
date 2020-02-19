import React from "react";

// Import components
import { useAuth } from "components/session";
import { withFirebase } from "components/firebase";

const HomeHeader = ({ firebase }) => {
  // Firebase auth hook
  const { authUser } = useAuth(firebase);

  let displayName, email;

  if (authUser) {
    displayName = authUser.displayName;
    email = authUser.email;
  }

  return (
    <div className="column is-10">
      <h1 className="title is-size-3">Profile</h1>

      {/* Sub title */}
      <p className=" subtitle has-text-grey-light is-size-6">
        {displayName}, {email}
      </p>
    </div>
  );
};

export default withFirebase(HomeHeader);
