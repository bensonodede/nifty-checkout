import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import common page components
import Common from "./common";

// Import admin page components
import Admin from "./admin";

// Import Checkout page components

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Common routes */}
          <Route exact path="/" component={Common} />

          {/* Admin routes */}
          <Route path="/:storeName/admin" component={Admin} />

          {/* Checkout routes */}

          {/* Page not found route */}
        </Switch>
      </BrowserRouter>
    );
  }
}

// Wrap routes in authentication provider
export default Routes;
