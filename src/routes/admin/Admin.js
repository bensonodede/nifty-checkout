import React from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Dashboard from "./dashboard";
import Products from "./products";
import AddProduct from "./addProduct";

const Admin = () => (
  <Switch>
    <Route exact path={"/:storeName/admin"} component={Dashboard} />
    <Route path={"/:storeName/admin/products"} component={Products} />
    <Route path={"/:storeName/admin/add-product"} component={AddProduct} />
  </Switch>
);

export default Admin;
