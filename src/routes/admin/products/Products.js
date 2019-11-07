import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { ProductList } from "./containers";

// import SellerNav from "../../../components/seller/sellerNav";

// Import styles
import "./styles.scss";

const Products = ({ match }) => {
  // Destructure route params
  let { storeName } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet>
        <title>Products - {storeName}</title>
      </Helmet>

      {/* Nav bar */}
      {/* <SellerNav /> */}

      {/* Products page */}
      {/* <div className="products">
        <div className="container"> */}
      <ProductList />
      {/* </div>
      </div> */}
    </>
  );
};

export default Products;
