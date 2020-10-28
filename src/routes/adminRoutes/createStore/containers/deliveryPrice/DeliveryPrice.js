import React from "react";

// Import components
import DeliveryPriceHeader from "./DeliveryPriceHeader";
import DeliveryPriceDescription from "./DeliveryPriceDescription";
import DeliveryPriceField from "./DeliveryPriceField";

const DeliveryPrice = ({
  isValid,
  touched: {
    costPerKm: touchedCostPerKm,
    minDeliveryFee: touchedMinDeliveryFee,
  },
}) => (
  <div className="route-wrapper-landing">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        <div className="column is-10-mobile is-6-tablet is-4-desktop">
          <DeliveryPriceHeader />
          <DeliveryPriceDescription />
          <DeliveryPriceField
            isValid={!!(isValid && touchedCostPerKm && touchedMinDeliveryFee)}
          />
        </div>
      </div>
    </div>
  </div>
);

export default DeliveryPrice;
