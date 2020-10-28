import React from "react";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

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
      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={"fadeUp"}
        timeout={350}
      >
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
      </CSSTransition>
    </>
  );
};
export default ProfileDashboard;
