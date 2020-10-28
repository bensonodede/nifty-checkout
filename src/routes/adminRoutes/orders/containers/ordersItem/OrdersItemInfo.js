import React from "react";

// Import components
import { ImgLoader } from "components/loader";
import { Icon } from "react-icons-kit";
import { ic_image } from "react-icons-kit/md/ic_image";
import { ic_access_time } from "react-icons-kit/md/ic_access_time";

// Import functions
import { getTimeFromNow } from "utils";

const OrdersItemInfo = ({ product, orderId, orderStatus, createdAt }) => {
  let imgUrl, name;

  // Check if product exists
  if (product) {
    name = product.name;
    imgUrl = product.imgUrls[0];
  }

  return (
    <div className="orders-item__info">
      {/* Order Image */}
      {product ? (
        <div className="orders-item__img-container">
          <ImgLoader
            transform={"c_thumb,g_center,r_8,w_48,h_48"}
            src={imgUrl}
            alt={name}
            className={"orders-item__img"}
          />
        </div>
      ) : (
        <div className="orders-item__img-placeholder-container">
          <div className="orders-item__img-placeholder">
            <Icon icon={ic_image} size={"100%"} />
          </div>
        </div>
      )}

      {/* Order content */}
      <div className="orders-item__content">
        {/* Desktop only */}
        <h5 className="is-marginless is-hidden-touch has-text-grey-light is-size-6">
          #{orderId}
        </h5>

        {/* Mobile and Tablet only */}
        <div className="orders-item__content-row is-hidden-desktop">
          <h5 className="is-marginless has-text-grey-dark is-size-6">
            #{orderId}
          </h5>

          {/* Order status */}
          <h5
            className={`${
              orderStatus && `orders-item__status--fulfilled`
            } is-size-7 has-text-grey-dark orders-item__status`}
          >
            {orderStatus ? <>Fulfilled</> : <>Pending</>}
          </h5>
        </div>

        {/* Order created at time */}
        {/* Mobile and Tablet only */}
        <div className="orders-item__content-time is-hidden-desktop ">
          <Icon
            size={"100%"}
            icon={ic_access_time}
            className={"orders-item__content-time-icon"}
          />

          <h5 className="is-marginless time__from-now has-text-grey-light">
            {getTimeFromNow(createdAt)}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default OrdersItemInfo;
