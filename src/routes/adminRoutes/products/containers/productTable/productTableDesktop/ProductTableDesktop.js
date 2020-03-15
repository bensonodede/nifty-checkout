import React from "react";

// Import components
import ProductItem from "./containers";

const ProductTableDesktop = ({ data }) => (
  <table className="table is-fullwidth">
    {/* Table head  */}
    <thead className="is-hidden-touch">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Last modified</th>
      </tr>
    </thead>

    {/* Table body */}
    <tbody>
      {data.productsByStore.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);

export default ProductTableDesktop;
