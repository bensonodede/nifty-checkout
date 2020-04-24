import React from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import {
  SubscriptionNew,
  SubscriptionExpired,
  SubscriptionPhoneNumber,
  SubscriptionActivate,
  SubscriptionSuccess,
} from "./containers";

const SubscriptionRoutes = () => (
  <Switch>
    {/* New subscription route */}
    <Route
      path={"/:storeUsername/admin/subscription/new"}
      component={SubscriptionNew}
    />

    {/* Expired subscription route */}
    <Route
      path={"/:storeUsername/admin/subscription/expired"}
      component={SubscriptionExpired}
    />

    {/* Phone number subscription route */}
    <Route
      path={"/:storeUsername/admin/subscription/phone-number"}
      component={SubscriptionPhoneNumber}
    />

    {/* Activate subscription route */}
    <Route
      path={"/:storeUsername/admin/subscription/activate"}
      component={SubscriptionActivate}
    />

    {/* Success subscription route */}
    <Route
      path={"/:storeUsername/admin/subscription/success"}
      component={SubscriptionSuccess}
    />
  </Switch>
);

export default SubscriptionRoutes;
