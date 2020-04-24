import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Import components
import { withAuthentication } from "components/session";
import NavbarRoute from "./NavbarRoute";

// Import routes
import CreateStore from "./createStore";
// import Dashboard from "./dashboard";
import Products from "./products";
import AddProduct from "./addProduct";
import EditProduct from "./editProduct";
import Orders from "./orders";
import Profile from "./profile";
import Help from "./help";
import Subscription from "./subscription";

const AdminRoutes = () => (
  <Switch>
    {/* Create-store route */}
    <Route path={"/create-store"} component={CreateStore} />

    {/* Subscription route */}
    <Route
      path={"/:storeUsername/admin/subscription"}
      component={Subscription}
    />

    {/* Dashboard/Home route */}
    {/* <NavbarRoute
            exact
            path={"/:storeUsername/admin"}
            component={Dashboard}
          /> */}

    {/* Home redirect route */}
    <Redirect
      exact
      from={"/:storeUsername/admin"}
      to={"/:storeUsername/admin/products"}
    />
    {/* Product list route */}
    <NavbarRoute
      exact
      path={"/:storeUsername/admin/products"}
      component={Products}
    />
    {/* Add product route */}
    <NavbarRoute
      path={"/:storeUsername/admin/products/add"}
      component={AddProduct}
    />
    {/* Edit product route */}
    <NavbarRoute
      path={"/:storeUsername/admin/products/edit/:id"}
      component={EditProduct}
    />
    {/* Orders route */}
    <NavbarRoute path={"/:storeUsername/admin/orders"} component={Orders} />
    {/* Profile route */}
    <NavbarRoute path={"/:storeUsername/admin/profile"} component={Profile} />
    {/* Help route */}
    <NavbarRoute path={"/:storeUsername/admin/help"} component={Help} />
  </Switch>
);

export default withAuthentication(AdminRoutes);
