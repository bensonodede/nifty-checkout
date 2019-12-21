import React from "react";
import { NavLink, withRouter } from "react-router-dom";

// Import components
import { Icon } from "react-icons-kit";
import { ic_account_circle } from "react-icons-kit/md/ic_account_circle";

const NavbarProfile = ({ match }) => {
  // Destructure params
  let { storeName } = match.params;

  return (
    <NavLink
      exact={true}
      to={`/${storeName}/admin/profile`}
      className={"navbar-profile"}
      activeClassName={"navbar-profile--active"}
    >
      <div className="navbar-profile__icon">
        <Icon icon={ic_account_circle} size={"100%"} />
      </div>
    </NavLink>
  );
};

export default withRouter(NavbarProfile);
