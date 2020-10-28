import React from "react";

// Import functions
import { getTimeFromNow } from "utils";

const OrdersItemTime = ({ createdAt }) => (
  <div className="orders-item__container">
    <h5 className="is-marginless is-size-6 has-text-grey-light time__from-now">
      {getTimeFromNow(createdAt)}
    </h5>
  </div>
);

export default OrdersItemTime;
