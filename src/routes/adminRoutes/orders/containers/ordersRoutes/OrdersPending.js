import React from "react";

// Import components
import OrdersList from "../ordersList";

const OrdersPending = () => (
  <div className="column is-10">
    <OrdersList orderStatus={0} />
  </div>
);

export default OrdersPending;
