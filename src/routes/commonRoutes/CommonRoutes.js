import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import HeroNavbar from "./heroNavbar";

// Import page routes
import Landing from "./landing";
import Login from "./login";
import Terms from "./terms";
import Privacy from "./privacy";
import About from "./about";
import TalkToUs from "./talkToUs";

// Render route with navbar
const NavbarRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <>
        {/* Navbar */}
        <HeroNavbar />

        {/* Route component */}
        <Component {...props} />
      </>
    )}
  />
);

const CommonRoutes = () => {
  // Get router location
  let location = useLocation();

  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      key={location.key}
      classNames={"fadeUp"}
      timeout={300}
    >
      <Switch location={location}>
        <Route exact path={"/"} component={Landing} />
        <Route path={"/login"} component={Login} />
        <NavbarRoute path={"/terms"} component={Terms} />
        <NavbarRoute path={"/privacy"} component={Privacy} />
        <NavbarRoute path={"/about"} component={About} />
        <NavbarRoute path={"/talk-to-us"} component={TalkToUs} />
      </Switch>
    </CSSTransition>
  );
};

export default CommonRoutes;
