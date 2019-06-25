import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { withAuthentication } from "./session";

// Import common page components
import { Landing, Faq } from "./landing";
import Welcome from "./Welcome";

// Import seller page component
import createStore from "./seller/createStore";
import Login from "./seller/Login";
import ProductSwitch from "./seller/products";
import CreateProduct from "./seller/createProduct";

// Import Checkout page component
import Checkout from "./buyer/Checkout";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Common routes */}
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/" component={Landing} />
          <Route path="/faq" component={Faq} />
          <Route path="/welcome" component={Welcome} />

          {/* Seller routes */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={createStore} />
          <Redirect exact from="/:storeName" to="/:storeName/products" />
          <Route path="/:storeName/products" component={ProductSwitch} />
          <Route path="/:storeName/add-product" component={CreateProduct} />

          {/* Checkout routes */}
          <Route path="/:storeName/:productId" component={Checkout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withAuthentication(Routes);
