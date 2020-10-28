import React from "react";
import GoogleMapReact from "google-map-react";

// Import functions
import { createMapOptions, renderPolyline, getAddress } from "./functions";

const OrderCustomerLocationMapWrapper = ({
  children,
  navLink,
  deliveryLocation,
  storeLocation,
  setAddress,
}) => (
  <div className="order-customer-location__map">
    {/* Overlay */}
    <div
      className="order-customer-location__map-overlay"
      // Open navigation link
      onClick={() => window.open(navLink)}
    />

    {/* Google Map */}
    <GoogleMapReact
      options={createMapOptions}
      defaultCenter={deliveryLocation}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => {
        // Render polyline
        renderPolyline(map, maps, storeLocation, deliveryLocation);

        // Get delivery location address
        getAddress(maps, deliveryLocation).then((result) => setAddress(result));
      }}
    >
      {children}
    </GoogleMapReact>
  </div>
);

export default OrderCustomerLocationMapWrapper;
