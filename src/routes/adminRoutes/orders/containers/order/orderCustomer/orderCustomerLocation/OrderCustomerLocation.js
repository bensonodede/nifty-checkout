import React from "react";

// Import components
import { useScript } from "components/useHooks";
import { Loader } from "components/loader";
import { ErrorToast } from "components/toast";
import OrderCustomerLocationMap from "./OrderCustomerLocationMap";

const OrderCustomerLocation = ({ deliveryLocation, storeLocation }) => {
  // Load Google Maps script
  const scriptStatus = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`
  );

  return (
    <>
      {/* Loading state */}
      {scriptStatus === "loading" && <Loader />}

      {/* Ready state */}
      {scriptStatus === "ready" && (
        <OrderCustomerLocationMap
          deliveryLocation={deliveryLocation}
          storeLocation={storeLocation}
        />
      )}

      {/* Error state */}
      {scriptStatus === "error" && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </>
  );
};

export default OrderCustomerLocation;
