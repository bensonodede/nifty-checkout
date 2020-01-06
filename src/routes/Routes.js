import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import page components
import Common from "./common";
import Admin from "./admin";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Common routes */}
          <Route exact path="/" component={Common} />

          {/* Admin routes */}
          <Route path="/:storeName/admin" component={Admin} />

          {/* Page not found route */}
        </Switch>
      </BrowserRouter>
    );
  }
}

// Wrap routes in authentication provider
export default Routes;
