import React from "react";
import numeral from "numeral";

const ProductItemPrice = ({ price }) => (
  <div>
    <div className="product-item-desktop__price">
      <h5 className="is-marginless is-size-6">
        {`${numeral(price).format("'0,0'")}`}
        <span className="product-item-desktop__price-currency">KSH</span>
      </h5>
    </div>
  </div>
);

export default ProductItemPrice;
