// Import packages
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Import components
import Landing from "./Landing";
import Menu from "./Menu";
import Faq from "./Faq";

// Product switch component

class LandingSwitch extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/faq" component={Faq} />
        </Switch>
      </div>
    );
  }
}

export default LandingSwitch;
