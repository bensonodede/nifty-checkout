import React from "react";
import { Switch, Route } from "react-router-dom";

// Import page routes
import Landing from "./landing";
import Login from "./login";

const CommonRoutes = () => (
  <Switch>
    <Route exact path={"/"} component={Landing} />
    <Route path={"/login"} component={Login} />
  </Switch>
);

export default CommonRoutes;
