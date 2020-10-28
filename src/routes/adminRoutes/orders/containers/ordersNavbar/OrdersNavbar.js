import React from "react";
import { withRouter, matchPath } from "react-router-dom";

// Import components
import OrdersNavbarItem from "./OrdersNavbarItem";

// Import styles
import "./styles.scss";

// Import navbar items
const data = require("./OrdersNavbar.json");

const OrdersNavBar = ({ match }) => {
  return (
    <div className="orders-navbar">
      {data.map((item) => {
        // Match route to determine if active
        let isActive = matchPath(match.url, {
          path: `/:storeUsername/admin/orders${item.link}/page/:pageNumber`,
          exact: true,
          strict: false,
        });

        return (
          <OrdersNavbarItem item={item} key={item.id} isActive={!!isActive} />
        );
      })}
    </div>
  );
};

export default withRouter(OrdersNavBar);
