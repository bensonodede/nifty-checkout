import React from "react";
import { Switch, Route } from "react-router-dom";

// Import page routes
import Landing from "./landing";
import Login from "./login";
import Terms from "./terms";
import Privacy from "./privacy";
import About from "./about";
import TalkToUs from "./talkToUs";

const CommonRoutes = () => (
  <Switch>
    <Route exact path={"/"} component={Landing} />
    <Route path={"/login"} component={Login} />
    <Route path={"/terms"} component={Terms} />
    <Route path={"/privacy"} component={Privacy} />
    <Route path={"/about"} component={About} />
    <Route path={"/talk-to-us"} component={TalkToUs} />
  </Switch>
);

export default CommonRoutes;
