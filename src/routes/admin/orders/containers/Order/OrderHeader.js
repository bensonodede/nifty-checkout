import React from "react";
import * as moment from "moment";

// Import components
import { Icon } from "react-icons-kit";
import { iosClockOutline } from "react-icons-kit/ionicons/iosClockOutline";

const OrderHeader = ({ data: { orderId, orderStatus, createdAt } }) => (
  <div className="column is-10">
    <div className="order-header">
      <h1 className="title is-size-3 is-marginless">#{orderId}</h1>

      <div className="order-header__content">
        {/* Order status */}
        <h5
          className={`${
            orderStatus ? `order-header__status--fulfilled ` : ``
          }is-marginless is-size-6 order-header__status`}
        >
          {orderStatus ? <>Fulfilled</> : <>Pending</>}
        </h5>

        {/* Order time */}
        <div className="order-header__time">
          <div className="order-header__time-icon">
            <Icon icon={iosClockOutline} size={"100%"} />
          </div>
          <p className="is-size-6 is-marginless">
            {moment(createdAt).fromNow()}
          </p>
        </div>
        {/* End Order time */}
      </div>
    </div>
  </div>
);

export default OrderHeader;
