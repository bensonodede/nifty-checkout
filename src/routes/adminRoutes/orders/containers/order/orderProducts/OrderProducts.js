import React from "react";

// Import components
import Card from "components/card";
import OrderProductsRow from "./OrderProductsRow";

const OrderProducts = ({ products }) => (
  <div className="order-card__wrapper">
    <Card>
      <div className="order-card">
        {/* Card Title */}
        <h1 className="title is-size-5 order-card__title">Products</h1>

        {/* Product list */}
        {products.map((item) => (
          <OrderProductsRow key={item.id} item={item} />
        ))}
      </div>
    </Card>
  </div>
);

export default OrderProducts;
