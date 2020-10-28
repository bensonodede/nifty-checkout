import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import ProfileDashboard from "../profileDashboard";
import Store from "../store";
import Payout from "../payout";
import Billing from "../billing";

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
        <Route
          exact
          path={"/:storeUsername/admin/profile"}
          component={ProfileDashboard}
        />
        <Route path={"/:storeUsername/admin/profile/store"} component={Store} />
        <Route
          path={"/:storeUsername/admin/profile/payouts"}
          component={Payout}
        />
        <Route
          path={"/:storeUsername/admin/profile/billing"}
          component={Billing}
        />
      </Switch>
    </CSSTransition>
  );
};

export default ProfileRoutes;
