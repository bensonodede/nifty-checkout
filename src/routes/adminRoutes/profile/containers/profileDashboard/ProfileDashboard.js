import React from "react";
import { Helmet } from "react-helmet";

// Import components
import {
  ProfileDashboardHeader,
  ProfileDashboardList,
  ProfileDashboardFooter,
} from "./containers";

// Import styles
import "./styles.scss";

const ProfileDashboard = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Profile · ${storeUsername}`} defer={false} />

      {/* Profile page */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Profile header */}
            <ProfileDashboardHeader />

            {/* Profile List */}
            <ProfileDashboardList />

            {/* Profile footer */}
            <ProfileDashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileDashboard;
