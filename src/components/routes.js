import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import seller page components
import Welcome from "./Welcome";
import Products from "./seller/Products";
import ProductWizard from "./productForm";

// Import buyer page components
import Home from "./Home";
import Review from "./buyer/Review";
import Payment from "./buyer/Payment";
import PhoneNum from "./buyer/phoneNum";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Common routes */}
          <Route exact path="/" component={Home} />
          <Route path="/welcome" component={Welcome} />

          {/* Seller routes */}
          <Route path="/:storeName/products" component={Products} />
          <Route path="/:storeName/add-product" component={ProductWizard} />

          {/* Buyer routes */}
          <Route path="/:storeName/review" component={Review} />
          <Route path="/:storeName/payment" component={Payment} />
          <Route path="/:storeName/phonenum" component={PhoneNum} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
