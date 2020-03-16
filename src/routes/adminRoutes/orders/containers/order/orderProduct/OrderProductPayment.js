import React from "react";

const OrderProductPayment = ({ mpesaReceiptNumber }) => (
  <>
    {/* Payment method */}
    <div className="order-product__section">
      <p className="is-marginless is-size-6 has-text-grey-light">
        Payment method
      </p>
      <h5 className="is-marginless is-size-6">M-pesa</h5>
    </div>

    {/* Receipt number */}
    <div className="order-product__section">
      <p className="is-marginless is-size-6 has-text-grey-light">Receipt no.</p>
      <h5 className="is-marginless is-size-6">{mpesaReceiptNumber}</h5>
    </div>
  </>
);

export default OrderProductPayment;
