import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { checkmarkCircled } from "react-icons-kit/ionicons/checkmarkCircled";

const OrderPaymentMpesa = ({ mpesaReceiptNumber }) => (
  <>
    {/* Payment Method */}
    <div className="order-payment-mpesa__row">
      <p className="is-marginless is-size-6 has-text-grey-light">
        Payment method
      </p>
      <h5 className="is-marginless is-size-6 has-text-grey-darker">M-pesa</h5>
    </div>

    {/* Payment receipt number */}
    <div className="order-payment-mpesa__row">
      <p className="is-marginless is-size-6 has-text-grey-light">Receipt no.</p>
      <h5 className="is-marginless is-size-6 has-text-grey-darker">
        {mpesaReceiptNumber}
      </h5>
    </div>

    {/* Payment icon */}
    <div className="order-payment-mpesa__confirm">
      <div>
        <Icon
          icon={checkmarkCircled}
          size={"100%"}
          className="order-payment-mpesa__checkmark-icon"
        />
      </div>
      <h5 className="is-marginless is-size-6">Fully paid</h5>
    </div>
  </>
);

export default OrderPaymentMpesa;
