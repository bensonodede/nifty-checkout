import React from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import { Navbar } from "components/navbar";

// Import routes
import Dashboard from "./dashboard";
import Products from "./products";
import AddProduct from "./addProduct";
import Orders from "./orders";
import Profile from "./profile";

// Render route with navbar
const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      <>
        <Navbar />
        <Component {...props} />
      </>
    )}
  />
);

const Admin = () => (
  <Switch>
    <NavRoute exact path={"/:storeName/admin"} component={Dashboard} />
    <NavRoute path={"/:storeName/admin/products"} component={Products} />
    <Route path={"/:storeName/admin/add-product"} component={AddProduct} />
    <NavRoute path={"/:storeName/admin/orders"} component={Orders} />
    <NavRoute path={"/:storeName/admin/profile"} component={Profile} />
  </Switch>
);

export default Admin;
