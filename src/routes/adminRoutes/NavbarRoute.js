import React from "react";
import { Route } from "react-router-dom";

// Import components
import { Navbar } from "components/navbar";

// Render route with navbar
const NavbarRoute = ({ exact, path, component: Component }) => (
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

export default NavbarRoute;
