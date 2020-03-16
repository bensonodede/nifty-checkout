import React from "react";

// Import components
import { ImgLoader } from "components/loader";
import { Icon } from "react-icons-kit";
import { ic_image } from "react-icons-kit/md/ic_image";

const OrdersItemInfo = ({ product, orderId, orderStatus }) => {
  let imgUrl, name;

  // Check if product exists
  if (product) {
    name = product.name;
    imgUrl = product.imgUrl;
  }

  return (
    <div className="orders-item__info">
      {/* Order Image */}
      {product ? (
        <div className="orders-item__img-container">
          <ImgLoader src={imgUrl} alt={name} className={"orders-item__img"} />
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
        <h5 className="is-marginless is-size-6">#{orderId}</h5>

        {/* Render on mobile and tablet */}
        <h5
          className={`${orderStatus &&
            `orders-item__status--fulfilled`} is-marginless is-size-7 is-hidden-desktop orders-item__status`}
        >
          {orderStatus ? <>Fulfilled</> : <>Pending</>}
        </h5>
      </div>
    </div>
  );
};
export default OrdersItemInfo;
