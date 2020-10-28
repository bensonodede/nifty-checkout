import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

// Import components
import ProductHeader from "./productHeader";
import ProductList from "./productList";

// Import Graphql query
import { PRODUCTS_COUNT } from "components/graphql/query";

const ProductListWithHeader = ({ exact, path, component: Component }) => {
  // Destructure route params
  let { storeUsername } = useParams();

  // Query number of store products
  const countQuery = useQuery(PRODUCTS_COUNT, {
    variables: {
      storeUsername,
    },
  });

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div className="route-wrapper">
          <div className="container">
            <div className="columns is-mobile is-multiline is-centered">
              <div className="column is-10">
                {/* Product Header */}
                <ProductHeader countQuery={countQuery} />

                {/* Render Component */}
                <Component {...props} countQuery={countQuery} />
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

// Product routes
const ProductRoutes = () => (
  <Switch>
    <ProductListWithHeader
      path="/:storeUsername/admin/products/page/:pageNumber"
      component={ProductList}
    />
  </Switch>
);

export default ProductRoutes;
