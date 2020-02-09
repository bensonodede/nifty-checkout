import React from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Dashboard from "./dashboard";
import Products from "./products";
import Orders from "./orders";

const SellerRoutes = () => (
  <>
    <Switch>
      <Route exact path="/:storeName/admin/" component={Dashboard} />
      <Route path="/:storeName/admin/products" component={Products} />
      <Route path="/:storeName/admin/orders" component={Orders} />
      {/* <Route path="/:storeName/admin/help" component={Dashboard} /> */}
      {/* <Route path="/:storeName/admin/" component={Dashboard} /> */}
    </Switch>
  </>
);

export default SellerRoutes;
