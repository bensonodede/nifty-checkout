import React, { useRef } from "react";
import { NavLink, withRouter } from "react-router-dom";

// Import components
import Tooltip from "components/tooltip";
import { Icon } from "react-icons-kit";
import { ic_account_circle } from "react-icons-kit/md/ic_account_circle";

const NavbarAccount = ({ match }) => {
  // Link ref
  const accountLinkRef = useRef();

  // Destructure params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Account Link */}
      <NavLink
        ref={accountLinkRef}
        exact={false}
        to={`/${storeUsername}/admin/account`}
        className={"navbar-account-link"}
        activeClassName={"navbar-account-link--active"}
      >
        <div className="navbar-account-link__icon">
          <Icon icon={ic_account_circle} size={"100%"} />
        </div>
      </NavLink>

      {/* Account tooltip */}
      <Tooltip text={"Account"} ref={accountLinkRef} />
    </>
  );
};

export default withRouter(NavbarAccount);
