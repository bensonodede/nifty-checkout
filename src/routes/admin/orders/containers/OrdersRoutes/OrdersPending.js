import React from "react";

// Import components
import OrdersList from "../OrdersList";

const OrdersPending = () => (
  <div className="column is-10">
    <OrdersList orderStatus={0} />
  </div>
);

export default OrdersPending;
