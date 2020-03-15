import React from "react";

// Import components
import ProductItem from "./containers";

const ProductTableMobile = ({ data }) => (
  <table className="table is-fullwidth">
    {/* Table body */}
    <tbody>
      {data.productsByStore.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);

export default ProductTableMobile;
