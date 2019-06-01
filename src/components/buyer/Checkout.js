import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

//
import { Review } from "./review";
import { PhoneNum } from "./phoneNum";

class Checkout extends Component {
  render() {
    return (
      // Allow checkout components to access cookies
      <CookiesProvider>
        <Switch>
          <Route exact path="/:storeName/:productId" component={Review} />
          <Route
            path="/:storeName/:productId/phonenum"
            render={props => <PhoneNum {...props} />}
          />
        </Switch>
      </CookiesProvider>
    );
  }
}

export default Checkout;
