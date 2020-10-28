import React, { useState } from "react";

// Import components
import OrderCustomerLocationMapTitle from "./OrderCustomerLocationMapTitle";
import OrderCustomerLocationMapWrapper from "./OrderCustomerLocationMapWrapper";

// Destination marker component
const DestinationMarker = () => <div className="destination-marker" />;

// Origin marker component
const OriginMarker = () => <div className="origin-marker" />;

/********* Order map component**********/

const OrderCustomerLocationMap = ({ deliveryLocation, storeLocation }) => {
  // Address state
  const [address, setAddress] = useState("");

  // Define navigation link
  let navLink = `https://www.google.com/maps/dir/?api=1&origin=${storeLocation.lat},${storeLocation.lng}&destination=${deliveryLocation.lat},${deliveryLocation.lng}&travelmode=driving`;

  return (
    <>
      {/* Delivery location title */}
      <OrderCustomerLocationMapTitle address={address} navLink={navLink} />

      {/* Delivery location map */}
      <OrderCustomerLocationMapWrapper
        navLink={navLink}
        deliveryLocation={deliveryLocation}
        storeLocation={storeLocation}
        setAddress={setAddress}
      >
        {/* Destination marker */}
        <DestinationMarker
          lat={deliveryLocation.lat}
          lng={deliveryLocation.lng}
        />
        {/* Origin marker */}
        <OriginMarker lat={storeLocation.lat} lng={storeLocation.lng} />
      </OrderCustomerLocationMapWrapper>
    </>
  );
};

export default OrderCustomerLocationMap;
