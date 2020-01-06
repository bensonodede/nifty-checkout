import React from "react";
import { Switch, Route } from "react-router-dom";

// Import pages
import OrdersAll from "./OrdersAll";
import OrdersPending from "./OrdersPending";
import OrdersFulfilled from "./OrdersFulfilled";
import Order from "../Order";

// Import components
import OrdersHeader from "../OrdersHeader";
import OrdersNavbar from "../OrdersNavbar";

// Orders routes with sub navbar
const OrdersNavbarRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Orders Header */}
            <OrdersHeader />

            {/* Orders Navbar */}
            <OrdersNavbar />

            {/* Render Component */}
            <Component {...props} />
          </div>
        </div>
      </div>
    )}
  />
);

const OrdersRoutes = () => (
  <Switch>
    <OrdersNavbarRoute
      exact
      path="/:storeName/admin/orders"
      component={OrdersAll}
    />
    <OrdersNavbarRoute
      path="/:storeName/admin/orders/pending"
      component={OrdersPending}
    />
    <OrdersNavbarRoute
      path="/:storeName/admin/orders/fulfilled"
      component={OrdersFulfilled}
    />
    <Route path={"/:storeName/admin/orders/:orderId"} component={Order} />
  </Switch>
);

export default OrdersRoutes;
