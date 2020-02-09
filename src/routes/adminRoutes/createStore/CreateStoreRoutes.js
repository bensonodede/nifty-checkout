import React from "react";
import { Switch, Route } from "react-router-dom";

// Import page components
import {
  CreateStoreNavbar,
  Intro,
  StoreName,
  StoreUsername,
  PhoneNumber,
  Payout,
  Policy
} from "./containers";

const CreateStoreRoutes = ({ FormikProps }) => (
  <>
    {/* Create store navbar */}
    <CreateStoreNavbar />

    <Switch>
      {/* Intro route */}
      <Route exact path="/create-store" component={Intro} />

      {/* Store name route */}
      <Route
        path="/create-store/store-name"
        render={props => <StoreName {...FormikProps} {...props} />}
      />

      {/* Store username route */}
      <Route
        path="/create-store/username"
        render={props => <StoreUsername {...FormikProps} {...props} />}
      />

      {/* Phone number route */}
      <Route
        path="/create-store/phone-number"
        render={props => <PhoneNumber {...FormikProps} {...props} />}
      />

      {/* Payments route */}
      <Route
        path="/create-store/payout"
        render={props => <Payout {...FormikProps} {...props} />}
      />

      {/* Policies route */}
      <Route
        path="/create-store/policy"
        render={props => <Policy {...FormikProps} {...props} />}
      />
    </Switch>
  </>
);

export default CreateStoreRoutes;
