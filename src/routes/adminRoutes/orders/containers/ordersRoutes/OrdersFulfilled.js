import React from "react";

// Import components
import OrdersList from "../ordersList";

const OrdersFulfilled = () => (
  <div className="column is-10">
    <OrdersList orderStatus={1} />
  </div>
);

export default OrdersFulfilled;
