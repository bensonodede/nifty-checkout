import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import {
  AddProductDetails,
  AddProductOptions,
  AddProductOption,
} from "./containers";

const AddProductRoutes = ({ FormikProps }) => {
  // Get router location
  let location = useLocation();

  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      key={location.key}
      classNames={"fadeUp"}
      timeout={300}
    >
      <Switch location={location}>
        {/* Add product details route */}
        <Route
          exact
          path="/:storeUsername/admin/products/add-product"
          render={(props) => <AddProductDetails {...FormikProps} {...props} />}
        />

        {/* Add product options route */}
        <Route
          path="/:storeUsername/admin/products/add-product/options"
          render={(props) => <AddProductOptions {...FormikProps} {...props} />}
        />

        {/* Add product option route */}
        <Route
          path="/:storeUsername/admin/products/add-product/option/:optionLabel"
          render={(props) => <AddProductOption {...FormikProps} {...props} />}
        />
      </Switch>
    </CSSTransition>
  );
};

export default AddProductRoutes;
