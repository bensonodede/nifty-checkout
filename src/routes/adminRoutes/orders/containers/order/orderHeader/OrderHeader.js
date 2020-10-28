import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { iosClockOutline } from "react-icons-kit/ionicons/iosClockOutline";

// Import styles
import "./styles.scss";

// Import functions
import { getTimeFromNow } from "utils";

const OrderHeader = ({ orderId, orderStatus, createdAt }) => (
  <div className="order-header">
    {/* Header */}
    <h1 className="title is-size-3 is-marginless">#{orderId}</h1>

    <div className="order-header__content">
      {/* Order status */}
      <h5
        className={`${
          orderStatus ? `order-header__status--fulfilled ` : ``
        }is-marginless order-header__status`}
      >
        {orderStatus ? <>Fulfilled</> : <>Pending</>}
      </h5>

      {/* Order time */}
      <div className="order-header__time">
        <Icon
          icon={iosClockOutline}
          size={"100%"}
          className="order-header__time-icon"
        />

        <p className="is-size-6 is-marginless has-text-grey-light time__from-now">
          {getTimeFromNow(createdAt)}
        </p>
      </div>
      {/* End Order time */}
    </div>
  </div>
);

export default OrderHeader;
