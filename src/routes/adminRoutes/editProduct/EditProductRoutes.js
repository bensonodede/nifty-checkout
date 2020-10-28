import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import {
  EditProductDetails,
  EditProductOptions,
  EditProductOption,
} from "./containers";

const EditProductRoutes = ({ FormikProps }) => {
  // Get router location
  let location = useLocation();

  return (
    <>
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
          {/* Edit product details route */}
          <Route
            exact
            path="/:storeUsername/admin/products/edit/:productId"
            render={(props) => (
              <EditProductDetails {...FormikProps} {...props} />
            )}
          />

          {/* Add product options route */}
          <Route
            path="/:storeUsername/admin/products/edit/:productId/options"
            render={(props) => (
              <EditProductOptions {...FormikProps} {...props} />
            )}
          />

          {/* Add product option route */}
          <Route
            path="/:storeUsername/admin/products/edit/:productId/option/:optionLabel"
            render={(props) => (
              <EditProductOption {...FormikProps} {...props} />
            )}
          />
        </Switch>
      </CSSTransition>
    </>
  );
};

export default EditProductRoutes;
