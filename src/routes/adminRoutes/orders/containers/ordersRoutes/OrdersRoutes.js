import React from "react";
import { compose } from "recompose";
import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import pages
import OrdersAll from "./OrdersAll";
import OrdersPending from "./OrdersPending";
import OrdersFulfilled from "./OrdersFulfilled";
import Order from "../order";

// Import components
import OrdersHeader from "../ordersHeader";
import OrdersNavbar from "../ordersNavbar";
import { withAuthorization, withSubscription } from "components/session";

// Orders routes with sub navbar
const OrdersNavbarRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={"fadeUp"}
        timeout={350}
      >
        <div className="route-wrapper">
          <div className="container">
            <div className="columns is-mobile is-multiline is-centered">
              <div className="column is-10">
                {/* Orders Header */}
                <OrdersHeader />

                {/* Orders Navbar */}
                <OrdersNavbar />

                {/* Render Component */}
                <Component {...props} />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    )}
  />
);

// Render routes
const OrdersRoutes = () => (
  <Switch>
    {/* Redirect route */}
    <Redirect
      exact
      from={"/:storeUsername/admin/orders"}
      to={"/:storeUsername/admin/orders/all/page/1"}
    />

    {/* All Orders Routes */}
    <OrdersNavbarRoute
      path="/:storeUsername/admin/orders/all/page/:pageNumber"
      component={OrdersAll}
    />

    {/* Pending Orders Routes*/}
    <OrdersNavbarRoute
      path="/:storeUsername/admin/orders/pending/page/:pageNumber"
      component={OrdersPending}
    />

    {/* Fulfilled Orders Routes */}
    <OrdersNavbarRoute
      path="/:storeUsername/admin/orders/fulfilled/page/:pageNumber"
      component={OrdersFulfilled}
    />

    {/* Order Page */}
    <Route path={"/:storeUsername/admin/orders/:orderId"} component={Order} />
  </Switch>
);

export default compose(withAuthorization, withSubscription)(OrdersRoutes);
