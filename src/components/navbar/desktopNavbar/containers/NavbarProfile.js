import React, { useRef } from "react";
import { NavLink, withRouter } from "react-router-dom";

// Import components
import Tooltip from "components/tooltip";
import { Icon } from "react-icons-kit";
import { ic_account_circle } from "react-icons-kit/md/ic_account_circle";

const NavbarProfile = ({ match }) => {
  // Link ref
  const profileLinkRef = useRef();

  // Destructure params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Profile Link */}
      <NavLink
        ref={profileLinkRef}
        exact={false}
        to={`/${storeUsername}/admin/profile`}
        className={"navbar-profile-link"}
        activeClassName={"navbar-profile-link--active"}
      >
        <div className="navbar-profile-link__icon">
          <Icon icon={ic_account_circle} size={"100%"} />
        </div>
      </NavLink>

      {/* Profile tooltip */}
      <Tooltip text={"Profile"} ref={profileLinkRef} />
    </>
  );
};

export default withRouter(NavbarProfile);
