import React from "react";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";

// Import pages
import OrdersAll from "./OrdersAll";
import OrdersPending from "./OrdersPending";
import OrdersFulfilled from "./OrdersFulfilled";
import Order from "../order";

// Import components
import { withAuthorization, withSubscription } from "components/session";
import OrdersHeader from "../ordersHeader";
import OrdersNavbar from "../ordersNavbar";

// Orders routes with sub navbar
const OrdersNavbarRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
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
      path="/:storeUsername/admin/orders"
      component={OrdersAll}
    />
    <OrdersNavbarRoute
      path="/:storeUsername/admin/orders/pending"
      component={OrdersPending}
    />
    <OrdersNavbarRoute
      path="/:storeUsername/admin/orders/fulfilled"
      component={OrdersFulfilled}
    />
    <Route path={"/:storeUsername/admin/orders/:orderId"} component={Order} />
  </Switch>
);

export default compose(withAuthorization, withSubscription)(OrdersRoutes);
