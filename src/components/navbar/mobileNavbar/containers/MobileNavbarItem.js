import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const MobileNavbarItem = ({ item, toggleMobileNavbar, match }) => {
  // Destructure store name
  let { storeUsername } = match.params;

  return (
    <NavLink
      onClick={toggleMobileNavbar}
      exact={item.exact}
      to={`/${storeUsername}/admin${item.link}`}
      className="mobile-navbar-item title is-size-3 is-marginless"
      activeClassName="mobile-navbar-item mobile-navbar-item--active title is-size-3 is-marginless"
    >
      {item.title}
    </NavLink>
  );
};

export default withRouter(MobileNavbarItem);
