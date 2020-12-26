import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import {
  Grid,
  Store,
  DeliveryPricing,
  Payout,
  Billing,
  Domain,
} from "./containers";

const AccountRoutes = () => {
  // Get router location
  let location = useLocation();

  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      key={location.key}
      classNames={"fadeUp"}
      timeout={300}
    >
      <Switch location={location}>
        {/* Account route */}
        <Route exact path={"/:storeUsername/admin/account"} component={Grid} />

        {/* Store route*/}
        <Route path={"/:storeUsername/admin/account/store"} component={Store} />

        {/* Delivery pricing route*/}
        <Route
          path={"/:storeUsername/admin/account/delivery-pricing"}
          component={DeliveryPricing}
        />

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
        <Route
          path={"/:storeUsername/admin/account/domain"}
          component={Domain}
        />
      </Switch>
    </CSSTransition>
  );
};

export default AccountRoutes;
