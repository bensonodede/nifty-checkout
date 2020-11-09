import React from "react";

// Import components
import StoreLocationHeader from "./StoreLocationHeader";
import StoreLocationDescription from "./StoreLocationDescription";
import StoreLocationPreview from "./storeLocationPreview";
import Button from "components/button";

const StoreLocation = ({ history, values }) => (
  <div className="create-store-route-wrapper">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        <div className="column is-10-mobile is-6-tablet is-4-desktop">
          <StoreLocationHeader />
          <StoreLocationDescription />
          <StoreLocationPreview />

          {/* Store location button */}
          <Button
            isFullWidth
            type={"button"}
            onClick={() => history.push("/create-store/delivery-price")}
            isDisabled={!values.storeLocation}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default StoreLocation;
