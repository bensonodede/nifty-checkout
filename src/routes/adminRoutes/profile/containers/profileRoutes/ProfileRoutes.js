import React from "react";
import { Switch, Route } from "react-router-dom";

// Import components
import Home from "../home";
import Store from "../store";
import Payout from "../payout";

const ProfileRoutes = () => (
  <Switch>
    <Route exact path={"/:storeUsername/admin/profile"} component={Home} />
    <Route path={"/:storeUsername/admin/profile/store"} component={Store} />
    <Route path={"/:storeUsername/admin/profile/payouts"} component={Payout} />
  </Switch>
);

export default ProfileRoutes;
