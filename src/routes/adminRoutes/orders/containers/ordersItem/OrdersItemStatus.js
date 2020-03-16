import React from "react";

const OrdersItemStatus = ({ orderStatus }) => (
  // Desktop: Order status
  <div className="orders-item__container">
    <h5
      className={`${orderStatus &&
        `orders-item__status--fulfilled`} is-marginless is-size-7-mobile is-size-7-tablet is-size-6-desktop orders-item__status`}
    >
      {orderStatus ? <>Fulfilled</> : <>Pending</>}
    </h5>
  </div>
);

export default OrdersItemStatus;
