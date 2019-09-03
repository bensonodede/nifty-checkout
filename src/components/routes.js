import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { withAuthentication } from "./session";

// Import common page components
import { Landing, Faq } from "./landing";
import { PageNotFound } from "./error";

// Import seller page component
import createStore from "./seller/createStore";
import Login from "./seller/Login";
import ProductSwitch from "./seller/products";
import CreateProduct from "./seller/createProduct";
import { Profile } from "./seller/profile";
import { Help, Questions, Talk } from "./seller/help";

// Import Checkout page component
import Checkout from "./buyer/Checkout";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Common routes */}
          <Route exact path="/" component={Landing} />
          <Route path="/faq" component={Faq} />

          {/* Seller routes */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={createStore} />
          <Redirect exact from="/:storeName" to="/:storeName/products" />
          <Route path="/:storeName/products" component={ProductSwitch} />
          <Route path="/:storeName/add-product" component={CreateProduct} />
          <Route path="/:storeName/profile" component={Profile} />
          <Route exact path="/:storeName/help" component={Help} />
          <Route path="/:storeName/help/questions" component={Questions} />
          <Route path="/:storeName/help/faq" component={Faq} />
          <Route path="/:storeName/help/talk" component={Talk} />

          {/* Checkout routes */}
          <Route path="/:storeName/:productId" component={Checkout} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// Wrap routes in authentication provider
export default withAuthentication(Routes);
