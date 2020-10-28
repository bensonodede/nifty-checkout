import React from "react";
import GoogleMapReact from "google-map-react";
import { useFormikContext } from "formik";

// Import map style
import mapStyle from "./storeLocationPreviewMapStyle.json";

// Map options
const createMapOptions = () => {
  return {
    zoomControl: false,
    fullscreenControl: false,
    gestureHandling: "none",
    styles: mapStyle,
  };
};

// Default location
const defaultLocation = {
  lat: -1.3032051,
  lng: 36.8204099,
};

// Destination marker component
const DestinationMarker = () => <div className="store-marker" />;

const StoreLocationPreviewMap = () => {
  // Destructure formik
  let {
    values: { storeLocation },
  } = useFormikContext();

  return (
    <div className="map-preview__container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        options={createMapOptions}
        defaultCenter={defaultLocation}
        center={storeLocation ? storeLocation : defaultLocation}
        zoom={storeLocation ? 16 : 13}
        defaultZoom={13}
      >
        {storeLocation && (
          <DestinationMarker lat={storeLocation.lat} lng={storeLocation.lng} />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default StoreLocationPreviewMap;
