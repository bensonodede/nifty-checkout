import React from "react";
import * as moment from "moment";

const OrdersItemTime = ({ createdAt }) => (
  <div className="orders-item__container">
    <h5 className="is-marginless is-size-6">{moment(createdAt).fromNow()}</h5>
  </div>
);

export default OrdersItemTime;
