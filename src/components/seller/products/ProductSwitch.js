// Import packages
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import { withAuthorization } from "../../session";
import Products from "./Products";
import EditProduct from "./EditProduct";
import { PageNotFound } from "../../error";

class ProductSwitch extends Component {
  previousLocation = this.props.location;

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/:storeName/dashboard" component={Products} />
          <Route path="/:storeName/products/:id/edit" component={EditProduct} />

          {/* Error 404 component */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default withAuthorization(ProductSwitch);
