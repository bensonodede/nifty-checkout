import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavbarItem = ({ match, item }) => {
  let { storeName } = match.params;

  return (
    <NavLink
      exact={item.exact}
      to={`/${storeName}/admin${item.link}`}
      className="navbar-item"
      activeClassName="navbar-item--active"
    >
      <h1 className="is-size-6 is-marginless">{item.title}</h1>
    </NavLink>
  );
};

export default withRouter(NavbarItem);
