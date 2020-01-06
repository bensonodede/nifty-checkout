import React from "react";
import { NavLink, withRouter } from "react-router-dom";

// Import styles
import "./styles.scss";

const OrdersNavbarItem = ({ item, match }) => {
  // Destructure route params
  let { storeName } = match.params;

  return (
    <NavLink
      exact={item.exact}
      to={`/${storeName}/admin/orders${item.link}`}
      className="orders-navbar-item"
      activeClassName="orders-navbar-item--active"
    >
      <h1 className="is-size-6 is-marginless">{item.title}</h1>
    </NavLink>
  );
};

export default withRouter(OrdersNavbarItem);
