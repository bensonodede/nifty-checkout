import React from "react";
import numeral from "numeral";

const ProductItemPrice = ({ price }) => (
  <h5 className="is-marginless is-size-6 has-text-grey-light">
    {`${numeral(price).format("'0,0'")}`}
    <span className="product-item__price-currency">KSH</span>
  </h5>
);

export default ProductItemPrice;
