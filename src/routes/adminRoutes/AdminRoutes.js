import React, { useEffect } from "react";
import { compose } from "recompose";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

// Import components
import { withFirebase } from "components/firebase";
import { useAuth } from "components/session";
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

const AdminRoutes = ({ firebase, history }) => {
  // Destructure firebase auth hook
  const { initializing, authUser } = useAuth(firebase);

  // If NOT authenticated, redirect to login screen
  useEffect(() => {
    if (!!!authUser && !initializing) {
      console.log("Not logged in");
      history.push("/login");
    }
  }, [authUser]);

  return (
    <>
      {!!authUser && !initializing ? (
        <Switch>
          <Route path={"/create-store"} component={CreateStore} />

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
          <NavbarRoute
            path={"/:storeUsername/admin/orders"}
            component={Orders}
          />

          {/* Profile route */}
          <NavbarRoute
            path={"/:storeUsername/admin/profile"}
            component={Profile}
          />

          {/* Help route */}
          <NavbarRoute path={"/:storeUsername/admin/help"} component={Help} />
        </Switch>
      ) : null}
    </>
  );
};

export default compose(withFirebase, withRouter)(AdminRoutes);
