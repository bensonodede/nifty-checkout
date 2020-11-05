import React from "react";

// Import components
import { useAuth } from "components/session";
import { withFirebase } from "components/firebase";

const ProfileDashboardHeader = ({ firebase }) => {
  // Firebase auth hook
  const { authUser } = useAuth(firebase);

  // Define global variables
  let displayName, email;

  if (authUser) {
    displayName = authUser.displayName;
    email = authUser.email;
  }

  return (
    <div className="column is-10">
      {/* Title */}
      <h1 className="title is-size-3 is-marginless">Profile</h1>

      {/* Sub title */}
      <p className="has-text-grey-light is-size-6">
        {displayName}, {email}
      </p>
    </div>
  );
};

export default withFirebase(ProfileDashboardHeader);
