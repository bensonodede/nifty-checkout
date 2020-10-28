import React from "react";

const ProductListTableHeader = () => (
  <thead className="is-hidden-touch">
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Last updated</th>
      {/* Options button title: DO NOT DELETE */}
      <th></th>
    </tr>
  </thead>
);

export default ProductListTableHeader;
