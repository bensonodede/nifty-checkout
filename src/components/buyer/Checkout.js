import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//
import { Review } from "./review";
import { PhoneNum } from "./phoneNum";

//
import "./styles.css";

class Checkout extends Component {
  render() {
    const { location } = this.props;
    return (
      // Allow checkout components to access cookies
      <CookiesProvider>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="checkout" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/:storeName/:productId"
                render={props => <Review {...props} />}
              />
              <Route
                path="/:storeName/:productId/phonenum"
                render={props => <PhoneNum {...props} />}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </CookiesProvider>
    );
  }
}

export default Checkout;
