import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Import components
import { Image, Details } from "./containers";

const AddProductRoutes = ({ FormikProps }) => (
  <Switch>
    {/* Product-form redirect */}
    <Redirect
      from="/:storeUsername/admin/products/add"
      exact
      to="/:storeUsername/admin/products/add/image"
    />

    {/* Product-form image route */}
    <Route
      path="/:storeUsername/admin/products/add/image"
      render={props => <Image {...FormikProps} {...props} />}
    />

    {/* Product-form details route */}
    <Route
      path="/:storeUsername/admin/products/add/details"
      render={props => <Details {...FormikProps} {...props} />}
    />
  </Switch>
);

export default AddProductRoutes;
