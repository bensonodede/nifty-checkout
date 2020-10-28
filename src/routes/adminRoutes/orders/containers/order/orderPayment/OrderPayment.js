import React from "react";

// Import components
import Card from "components/card";
import OrderPaymentTally from "./OrderPaymentTally";
import OrderPaymentMpesa from "./OrderPaymentMpesa";

// Import styles
import "./styles.scss";

const OrderPayment = ({ productTotal, deliveryFee, total, payment }) => (
  <div className="order-card__wrapper">
    <Card>
      <div className="order-card">
        {/* Card Title */}
        <h1 className="title is-size-5 order-card__title">Payment details</h1>

        {/* Payment tally */}
        <OrderPaymentTally
          productTotal={productTotal}
          deliveryFee={deliveryFee}
          total={total}
        />

        {/* M-pesa details */}
        <OrderPaymentMpesa mpesaReceiptNumber={payment.mpesaReceiptNumber} />
      </div>
    </Card>
  </div>
);

export default OrderPayment;
