import React from "react";
import numeral from "numeral";

const OrdersItemTotal = ({ total }) => (
  // Mobile & Tablet: Order total
  <div className="orders-item__container">
    <h5 className="is-marginless is-size-6-desktop has-text-grey-light">
      {`${numeral(total).format("'0,0'")}`}{" "}
      <span className="is-size-7">KES</span>
    </h5>
  </div>
);

export default OrdersItemTotal;
