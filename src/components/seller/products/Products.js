import React from "react";
import { Helmet } from "react-helmet";

// Import components
import ProductList from "./productList";

// Import styles
import "./styles.scss";

const Products = ({ match }) => {
  // Destructure route params
  let { storeName } = match.params;

  return (
    <div className="products">
      {/* Document title */}
      <Helmet>
        <title>Products - {storeName}</title>
      </Helmet>

      {/* Product list */}
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
