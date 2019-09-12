import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Import components
import { Review } from "./review";
import { Explain } from "./explain";
import { PhoneNum } from "./phoneNum";
import { PageNotFound } from "../error";
import { Success } from "./success";

class Checkout extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* Review route */}
          <Route
            exact
            path="/:storeName/:humanId"
            render={props => <Review {...props} />}
          />

          {/* Explain route */}
          <Route
            exact
            path="/:storeName/:humanId/explain"
            render={props => <Explain {...props} />}
          />

          {/* Phone number route */}
          <Route
            path="/:storeName/:humanId/phone-number"
            render={props => <PhoneNum {...props} />}
          />

          {/* Success route */}
          <Route
            exact
            path="/:storeName/:humanId/success"
            render={props => <Success {...props} />}
          />

          {/* Error 404 route */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default Checkout;
