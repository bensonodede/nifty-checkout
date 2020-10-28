import React from "react";
import { Helmet } from "react-helmet";
import { compose } from "recompose";

// Import components
import { withAuthorization, withSubscription } from "components/session";
import { ProductRoutes } from "./containers";

// Import styles
import "./styles.scss";

const Products = ({ match }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet title={`Products · ${storeUsername}`} defer={false} />

      {/* Products routes */}
      <ProductRoutes />
    </>
  );
};

export default compose(withAuthorization, withSubscription)(Products);
