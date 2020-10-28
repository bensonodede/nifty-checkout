import React from "react";

// Import components
import StoreNameHeader from "./StoreNameHeader";
import StoreNameField from "./StoreNameField";
import StoreNameDescription from "./StoreNameDescription";

const StoreName = ({
  isValid,
  touched: { storeName: touchedStoreName },
  values,
}) => {
  return (
    <div className="route-wrapper-landing">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered is-vcentered">
          <div className="column is-10-mobile is-6-tablet is-4-desktop">
            <StoreNameHeader />
            <StoreNameField isValid={!!(isValid && touchedStoreName)} />
            <StoreNameDescription values={values} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreName;
