// Import packages
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Import components
import { withAuthorization } from "../../session";
import Products from "./Products";
import ProductModal from "./ProductModal";
import DeleteModal from "./DeleteModal";
import EditProduct from "./EditProduct";
import { PageNotFound } from "../../error";

class ProductSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;

    // Set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;

    // Check if new location has modal state
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          {/* Options modal redirect*/}

          <Redirect
            from="/:storeName/products/options"
            exact
            to="/:storeName/products"
          />

          {/* Delete modal redirect */}
          <Redirect
            from="/:storeName/products/:id/delete"
            exact
            to="/:storeName/products"
          />

          <Route exact path="/:storeName/products" component={Products} />
          <Route path="/:storeName/products/:id/edit" component={EditProduct} />

          {/* Error 404 component */}
          <Route component={PageNotFound} />
        </Switch>

        {/* Declare modal routes */}

        <div>
          {isModal && (
            <Switch location={location}>
              <Route
                path="/:storeName/products/options"
                render={props => <ProductModal {...props} />}
              />

              <Route
                path="/:storeName/products/:id/delete"
                render={props => <DeleteModal {...props} />}
              />
            </Switch>
          )}
        </div>
      </div>
    );
  }
}

export default withAuthorization(ProductSwitch);
