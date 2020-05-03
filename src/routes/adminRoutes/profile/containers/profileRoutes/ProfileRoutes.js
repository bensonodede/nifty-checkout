import React from "react";
import { Switch, Route } from "react-router-dom";

// Import components
import ProfileDashboard from "../profileDashboard";
import Store from "../store";
import Payout from "../payout";
import Billing from "../billing";

const ProfileRoutes = () => (
  <Switch>
    <Route
      exact
      path={"/:storeUsername/admin/profile"}
      component={ProfileDashboard}
    />
    <Route path={"/:storeUsername/admin/profile/store"} component={Store} />
    <Route path={"/:storeUsername/admin/profile/payouts"} component={Payout} />
    <Route path={"/:storeUsername/admin/profile/billing"} component={Billing} />
  </Switch>
);

export default ProfileRoutes;
