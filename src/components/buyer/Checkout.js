import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Import components
import { Review } from "./review";
import { Explain } from "./explain";
import { Waiting } from "./waiting";
import { PhoneNum } from "./phoneNum";
import { PageNotFound } from "../error";
import { Success } from "./success";
import { Confirm } from "./confirm";

class Checkout extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;

    // Set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;

    // Check if new location has modal state
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Redirect
            from="/:storeName/:humanId/confirm"
            exact
            to="/:storeName/:humanId"
          />

          {/* Review route */}
          <Route
            exact
            path="/:storeName/:humanId"
            render={props => <Review {...props} />}
          />

          {/* Explain route */}
          <Route
            exact
            path="/:storeName/:humanId/explain"
            render={props => <Explain {...props} />}
          />

          {/* Waiting route */}
          <Route
            exact
            path="/:storeName/:humanId/waiting"
            render={props => <Waiting {...props} />}
          />

          {/* Phone number route */}
          <Route
            path="/:storeName/:humanId/phone-number"
            render={props => <PhoneNum {...props} />}
          />

          {/* Success route */}
          <Route
            exact
            path="/:storeName/:humanId/success"
            render={props => <Success {...props} />}
          />

          {/* Error 404 route */}
          <Route component={PageNotFound} />
        </Switch>

        {/* Declare modal routes */}
        <div>
          {isModal && (
            <Switch location={location}>
              {/* Confirmation modal */}
              <Route
                path="/:storeName/:humanId/confirm"
                render={props => <Confirm {...props} />}
              />
            </Switch>
          )}
        </div>
      </div>
    );
  }
}

export default Checkout;
