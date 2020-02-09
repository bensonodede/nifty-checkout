import React from "react";

// Import components
import StoreUsernameHeader from "./StoreUsernameHeader";
import StoreUsernameField from "./StoreUsernameField";
import StoreUsernameDescription from "./StoreUsernameDescription";

const StoreUsername = ({
  values,
  isValid,
  touched: { storeUsername: touchedStoreUsername }
}) => (
  <div className="route-wrapper">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        <div className="column is-10-mobile is-8-tablet is-4-desktop">
          <StoreUsernameHeader />
          <StoreUsernameField isValid={!!(isValid && touchedStoreUsername)} />
          <StoreUsernameDescription values={values} />
        </div>
      </div>
    </div>
  </div>
);

export default StoreUsername;
