import React from "react";
import { Switch, Route } from "react-router-dom";

// Import components
import Home from "./home";
import Store from "./store";

const ProfileRoutes = () => (
  <Switch>
    <Route exact path={"/:storeUsername/admin/profile"} component={Home} />
    <Route path={"/:storeUsername/admin/profile/store"} component={Store} />
  </Switch>
);

export default ProfileRoutes;
