import React from "react";

const OrderPaymentTally = ({ productTotal, deliveryFee, total }) => (
  <div className="order-payment-tally">
    {/* Product total */}
    <p className="order-payment-tally__row is-size-6 has-text-grey-light">
      <span>Sub-total</span>
      <span>
        {productTotal} <span className="is-size-7">KES</span>
      </span>
    </p>

    {/* Delivery fee */}
    <p className="order-payment-tally__row is-size-6 has-text-grey-light">
      <span>Delivery fee</span>
      <span>
        {deliveryFee} <span className="is-size-7">KES</span>
      </span>
    </p>

    {/* Total */}
    <h5 className="order-payment-tally__row order-payment-tally__row-total is-size-6 title">
      <span>Total</span>
      <span>
        {total} <span className="is-size-7">KES</span>
      </span>
    </h5>
  </div>
);

export default OrderPaymentTally;
