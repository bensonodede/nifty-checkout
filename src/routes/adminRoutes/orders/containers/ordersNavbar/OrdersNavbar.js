import React from "react";

// Import components
import OrdersNavbarItem from "./OrdersNavbarItem";

// Import styles
import "./styles.scss";

// Import navbar items
const data = require("./OrdersNavbar.json");

const OrdersNavBar = () => (
  <div className="column is-10">
    <div className="orders-navbar">
      {data.map(item => (
        <OrdersNavbarItem item={item} key={item.id} />
      ))}
    </div>
  </div>
);

export default OrdersNavBar;
