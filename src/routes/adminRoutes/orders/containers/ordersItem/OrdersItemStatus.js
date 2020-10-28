import React from "react";

const OrdersItemStatus = ({ orderStatus }) => (
  // Desktop: Order status
  <div className="orders-item__container">
    <h5
      className={`${
        orderStatus && `orders-item__status--fulfilled`
      } orders-item__status`}
    >
      {orderStatus ? <>Fulfilled</> : <>Pending</>}
    </h5>
  </div>
);

export default OrdersItemStatus;
