import React from "react";

const OrderProductsRowQuantity = ({ selectedQuantity }) => (
  <h5 className="is-marginless is-size-6 order-products-row__quantity">
    <span>
      {"  "}×{"  "}
    </span>
    <span className="order-products-row__quantity-number">
      {selectedQuantity}
    </span>
  </h5>
);

export default OrderProductsRowQuantity;
