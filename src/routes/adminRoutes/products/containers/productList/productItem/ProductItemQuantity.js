import React from "react";
import numeral from "numeral";

const ProductItemQuantity = ({ quantity, remaining }) => (
  <h5 className="is-marginless is-size-6 has-text-grey-light">
    {`${numeral(remaining).format("'0,0'")}`} left
  </h5>
);

export default ProductItemQuantity;
