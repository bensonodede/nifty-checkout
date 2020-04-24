import React from "react";
import { Helmet } from "react-helmet";
import { compose } from "recompose";

// Import components
import { withAuthorization, withSubscription } from "components/session";
import { ProductList } from "./containers";

// Import styles
import "./styles.scss";

const Products = ({ match }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet title={`Products · ${storeUsername}`} defer={false} />

      {/* Products page */}
      <div className="products route-wrapper">
        <div className="container">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default compose(withAuthorization, withSubscription)(Products);
