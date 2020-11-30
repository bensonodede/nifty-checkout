import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import { DomainAdd, DomainDns, DomainActive } from "./containers";

const DomainRoutes = () => {
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
        {/* Domain verified */}
        <Route
          exact
          path={"/:storeUsername/admin/account/domain"}
          component={DomainActive}
        />

        {/* Add domain route */}
        <Route
          path={"/:storeUsername/admin/account/domain/add"}
          component={DomainAdd}
        />

        {/* Domain DNS route*/}
        <Route
          path={"/:storeUsername/admin/account/domain/dns"}
          component={DomainDns}
        />
      </Switch>
    </CSSTransition>
  );
};

export default DomainRoutes;
