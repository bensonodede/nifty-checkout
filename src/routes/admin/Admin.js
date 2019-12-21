import React from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import { Navbar } from "components/navbar";
import Dashboard from "./dashboard";
import Products from "./products";
import AddProduct from "./addProduct";

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
    <NavRoute path={"/:storeName/admin/add-product"} component={AddProduct} />
  </Switch>
);

export default Admin;
