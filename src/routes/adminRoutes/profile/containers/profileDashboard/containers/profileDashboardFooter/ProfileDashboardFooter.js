import React from "react";

// Import components
import { SignOut } from "components/auth";
import Button from "components/button";

const ProfileDashboardFooter = () => (
  <div className="column is-10">
    <SignOut>
      <div className="home-footer__logout-container">
        <Button isOutline>Log out</Button>
      </div>
    </SignOut>
  </div>
);

export default ProfileDashboardFooter;
