import React from "react";
import { useClipboard } from "use-clipboard-copy";

// Import components
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import { SuccessToast } from "components/toast";

const OrderCustomerLocationMapTitle = ({ address, navLink }) => {
  // Copy to clipboard hook
  const { copy, copied } = useClipboard({
    copiedTimeout: 1500, // timeout duration in milliseconds
  });

  return (
    <div className="order-customer-location__title">
      {/* Delivery location address */}
      <div className="order-customer-contact__description-row">
        <p className="is-size-6 is-marginless has-text-grey-light ">
          Delivery location
        </p>
        <h5 className="is-size-6 is-marginless has-text-grey-darker">
          {address}
        </h5>
      </div>

      {/* Copy button */}
      <button
        type={"button"}
        onClick={() => copy(navLink)}
        className="order-customer-contact__copy-btn"
      >
        <Icon
          icon={ic_content_copy}
          size={"100%"}
          className="order-customer-contact__copy-btn-icon"
        />
      </button>

      {/* Success toast on copied */}
      {copied && <SuccessToast text={"Directions copied"} emoji={"📍"} />}
    </div>
  );
};

export default OrderCustomerLocationMapTitle;
