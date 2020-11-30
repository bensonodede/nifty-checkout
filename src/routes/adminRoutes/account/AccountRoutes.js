import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// Import components
import { Grid, Store, Payout, Billing, Domain } from "./containers";

const AccountRoutes = () => {
  // Get router location
  let location = useLocation();

  return (
    <Switch location={location}>
      {/* Account route */}
      <Route exact path={"/:storeUsername/admin/account"} component={Grid} />

      {/* Store route*/}
      <Route path={"/:storeUsername/admin/account/store"} component={Store} />

      {/* Payout route */}
      <Route
        path={"/:storeUsername/admin/account/payouts"}
        component={Payout}
      />

      {/* Billing route */}
      <Route
        path={"/:storeUsername/admin/account/billing"}
        component={Billing}
      />

      {/* Domain route */}
      <Route path={"/:storeUsername/admin/account/domain"} component={Domain} />
    </Switch>
  );
};

export default AccountRoutes;
