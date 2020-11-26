import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Import components
import { withAuthentication } from "components/session";
import NavbarRoute from "./NavbarRoute";

// Import routes
// import Dashboard from "./dashboard";
import CreateStore from "./createStore";
import Products from "./products";
import AddProduct from "./addProduct";
import EditProduct from "./editProduct";
import Orders from "./orders";
import Account from "./account";
import Help from "./help";
import Subscription from "./subscription";
// import Error404 from "./error404";

const AdminRoutes = () => (
  <Switch>
    {/* Create-store route */}
    <Route path={"/create-store"} component={CreateStore} />

    {/* Subscription route */}
    <Route
      path={"/:storeUsername/admin/subscription"}
      component={Subscription}
    />

    {/* Products redirect routes */}
    <Redirect
      exact
      from={"/:storeUsername/admin"}
      to={"/:storeUsername/admin/products/page/1"}
    />

    <Redirect
      exact
      from={"/:storeUsername/admin/products"}
      to={"/:storeUsername/admin/products/page/1"}
    />

    {/* Product list route */}
    <NavbarRoute
      exact
      path={"/:storeUsername/admin/products/page/:pageNumber"}
      component={Products}
    />

    {/* Add product route */}
    <NavbarRoute
      path={"/:storeUsername/admin/products/add-product"}
      component={AddProduct}
    />

    {/* Edit product route */}
    <NavbarRoute
      path={"/:storeUsername/admin/products/edit/:productId"}
      component={EditProduct}
    />

    {/* Orders route */}
    <NavbarRoute path={"/:storeUsername/admin/orders"} component={Orders} />

    {/* Profile route */}
    <NavbarRoute path={"/:storeUsername/admin/account"} component={Account} />

    {/* Help route */}
    <NavbarRoute path={"/:storeUsername/admin/help"} component={Help} />
  </Switch>
);

export default withAuthentication(AdminRoutes);
