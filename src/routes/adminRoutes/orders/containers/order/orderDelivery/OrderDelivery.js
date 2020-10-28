import React from "react";
import { useClipboard } from "use-clipboard-copy";
import numeral from "numeral";

// Import components
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import Card from "components/card";
import Button from "components/button";
import { SuccessToast } from "components/toast";
import OrderDeliveryFooter from "./OrderDeliveryFooter";

// Import styles
import "./styles.scss";

const OrderDelivery = ({
  id,
  orderId,
  orderStatus,
  deliveryFee,
  deliveryLocation,
  store: { storeLocation },
  payment: { phoneNumber },
}) => {
  // Copy to clipboard hook
  const { copy, copied } = useClipboard({
    copiedTimeout: 1500, // timeout duration in milliseconds
  });

  // Define navigation route link
  let navLink = `https://www.google.com/maps/dir/?api=1&origin=${storeLocation.lat},${storeLocation.lng}&destination=${deliveryLocation.lat},${deliveryLocation.lng}&travelmode=driving`;

  return (
    <div className="order-card__wrapper">
      <Card>
        <div className="order-card">
          {/* Delivery Title */}
          <h1 className="title is-size-5 order-card__title">
            Ready to deliver?
            <span
              role="img"
              aria-label="delivery emoji"
              className="is-size-4 order-delivery__emoji"
            >
              🚚
            </span>
          </h1>

          {/* Delivery description*/}
          <p className="is-size-6 has-text-grey-light">
            Click the button below to{" "}
            <span className="title is-size-6">copy</span> and{" "}
            <span className="title is-size-6">share</span> the order details and
            directions with your delivery guy.{" "}
          </p>

          {/* Copy all button */}
          <Button
            isFullWidth
            isOutline
            type={"button"}
            className="order-delivery__btn"
            onClick={() =>
              copy(
                `🆔Order ID:\n#${orderId}\n\n🤙Contact:\n+${phoneNumber}\n\n📍Directions:\n${navLink}\n\n💰Delivery fee:\nKsh.${numeral(
                  deliveryFee
                ).format("'0,0'")}`
              )
            }
          >
            <span>
              <Icon
                icon={ic_content_copy}
                size={"100%"}
                className="order-delivery__btn-icon"
              />
            </span>
            Copy all
          </Button>

          {/*  */}
          <OrderDeliveryFooter id={id} orderStatus={orderStatus} />
        </div>
      </Card>

      {/* Success toast on copied */}
      {copied && <SuccessToast text={"Delivery info copied"} emoji={"🚚"} />}
    </div>
  );
};

export default OrderDelivery;
