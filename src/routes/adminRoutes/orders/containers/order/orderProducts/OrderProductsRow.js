import React from "react";

// Import components
import OrderProductsRowImage from "./OrderProductsRowImage";
import OrderProductsRowQuantity from "./OrderProductsRowQuantity";
import OrderProductsRowDescription from "./OrderProductsRowDescription";

// Import styles
import "./styles.scss";

const OrderProductsRow = ({ item }) => {
  // Destructure data
  let { product, variant, selectedQuantity } = item;

  return (
    <div className="order-products-row">
      {/* Image */}
      <OrderProductsRowImage product={product} />

      <div className="order-products-row__content">
        {/* Name and Variant label */}
        <OrderProductsRowDescription product={product} variant={variant} />

        {/* Quantity */}
        <OrderProductsRowQuantity selectedQuantity={selectedQuantity} />
      </div>
    </div>
  );
};

export default OrderProductsRow;
