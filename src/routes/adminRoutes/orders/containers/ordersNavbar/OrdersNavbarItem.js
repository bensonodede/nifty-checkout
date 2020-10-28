import React from "react";
import { NavLink, withRouter } from "react-router-dom";

// Import styles
import "./styles.scss";

const OrdersNavbarItem = ({ item, match, isActive }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <NavLink
      exact={item.exact}
      to={`/${storeUsername}/admin/orders${item.link}/page/1`}
      isActive={() => {
        return isActive;
      }}
      className="orders-navbar-item"
      activeClassName="orders-navbar-item--active"
    >
      <h1 className="is-size-6 is-marginless orders-navbar-item__text">
        {item.title}
      </h1>
    </NavLink>
  );
};

export default withRouter(OrdersNavbarItem);
