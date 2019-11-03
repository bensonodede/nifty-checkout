import React from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Landing from "./landing";
import Login from "./login";

const Common = () => (
  <Switch>
    <Route exact path={"/"} component={Landing} />
    <Route exact path={"/login"} component={Login} />
  </Switch>
);

export default Common;
