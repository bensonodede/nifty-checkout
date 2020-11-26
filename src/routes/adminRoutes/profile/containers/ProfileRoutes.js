import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import Settings from "./settings";
import Store from "./store";
import Payout from "./payout";
import Billing from "../../account/containers/billing";
import Domain from "./domain";

const ProfileRoutes = () => {
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
        {/* Profile route */}
        <Route
          exact
          path={"/:storeUsername/admin/profile"}
          component={Settings}
        />

        {/* Store route*/}

        <Route path={"/:storeUsername/admin/profile/store"} component={Store} />

        {/* Payout route */}
        <Route
          path={"/:storeUsername/admin/profile/payouts"}
          component={Payout}
        />

        {/* Billing route */}
        <Route
          path={"/:storeUsername/admin/profile/billing"}
          component={Billing}
        />

        {/* Domain route */}
        <Route
          path={"/:storeUsername/admin/profile/domain"}
          component={Domain}
        />
      </Switch>
    </CSSTransition>
  );
};

export default ProfileRoutes;
