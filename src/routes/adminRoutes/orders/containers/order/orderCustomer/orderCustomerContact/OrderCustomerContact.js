import React from "react";
import { useClipboard } from "use-clipboard-copy";

// Import components
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import { SuccessToast } from "components/toast";

const OrderCustomerContact = ({ phoneNumber }) => {
  // Copy to clipboard hook
  const { copy, copied } = useClipboard({
    copiedTimeout: 1500, // timeout duration in milliseconds
  });

  // Format phone number for readability
  let phoneNumberMask = phoneNumber.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{3})$/g,
    "+$1 ($2) $3 $4"
  );

  return (
    <div className="order-customer-contact">
      {/* Order contact phone number */}
      <div className="order-customer-contact__description-row">
        <p className="is-size-6 is-marginless has-text-grey-light">
          Phone number
        </p>
        <h5 className="is-size-6 is-marginless has-text-grey-dark">
          {phoneNumberMask}
        </h5>
      </div>

      {/* Copy button */}
      <button
        type={"button"}
        onClick={() => copy(`+${phoneNumber}`)}
        className="order-customer-contact__copy-btn"
      >
        <Icon
          icon={ic_content_copy}
          size={"100%"}
          className="order-customer-contact__copy-btn-icon"
        />
      </button>

      {/* Success toast on copied */}
      {copied && <SuccessToast text={"Phone number copied"} emoji={"🤙"} />}
    </div>
  );
};

export default OrderCustomerContact;
