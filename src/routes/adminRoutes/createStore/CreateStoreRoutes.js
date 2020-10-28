import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import page components
import {
  Intro,
  StoreName,
  StoreUsername,
  PhoneNumber,
  Payout,
  Policy,
  DeliveryPrice,
  StoreLocation,
  StoreLocationMap,
} from "./containers";

const CreateStoreRoutes = ({ FormikProps }) => {
  // Get router location
  let location = useLocation();

  return (
    <>
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
          {/* Intro route */}
          <Route exact path="/create-store" component={Intro} />

          {/* Store name route */}
          <Route
            path="/create-store/store-name"
            render={(props) => <StoreName {...FormikProps} {...props} />}
          />

          {/* Store username route */}
          <Route
            path="/create-store/username"
            render={(props) => <StoreUsername {...FormikProps} {...props} />}
          />

          {/* Phone number route */}
          <Route
            path="/create-store/phone-number"
            render={(props) => <PhoneNumber {...FormikProps} {...props} />}
          />

          {/* Payments route */}
          <Route
            path="/create-store/payout"
            render={(props) => <Payout {...FormikProps} {...props} />}
          />

          {/* Store location preview */}
          <Route
            path="/create-store/store-location"
            render={(props) => <StoreLocation {...FormikProps} {...props} />}
          />

          {/* Store location preview */}
          <Route
            path="/create-store/store-location-map"
            render={(props) => <StoreLocationMap {...FormikProps} {...props} />}
          />

          {/* Delivery price */}
          <Route
            path="/create-store/delivery-price"
            render={(props) => <DeliveryPrice {...FormikProps} {...props} />}
          />

          {/* Policies route */}
          <Route
            path="/create-store/policy"
            render={(props) => <Policy {...FormikProps} {...props} />}
          />
        </Switch>
      </CSSTransition>
    </>
  );
};

export default CreateStoreRoutes;
