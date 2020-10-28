import React, { useContext, useState } from "react";
import { useFormikContext } from "formik";

// Import components
import GoogleMapReact from "google-map-react";
import StoreLocationMapContext from "../StoreLocationMapContext";
import MapStlye from "./StoreLocationMapStyle.json";

// Import styles
import "./styles.scss";

const StoreLocationMapGoogle = () => {
  // Map dragging state
  const [dragging, setDragging] = useState(false);

  // Destructure delivery context
  const { setStoreLocation, mapZoom } = useContext(StoreLocationMapContext);

  // Get values
  const { values } = useFormikContext();

  // Map options
  const createMapOptions = () => {
    return {
      zoomControl: false,
      fullscreenControl: false,
      clickableIcons: false,
      gestureHandling: "greedy",
      styles: MapStlye,
    };
  };

  // Default location
  const defaultLocation = {
    lat: -1.3032051,
    lng: 36.8204099,
  };

  // Default zoom
  const defaultZoom = 13;

  return (
    <div className="delivery-map__wrapper">
      <div className="delivery-map">
        {/* Google maps */}
        <GoogleMapReact
          options={createMapOptions}
          defaultCenter={defaultLocation}
          center={values.storeLocation ? values.storeLocation : defaultLocation}
          zoom={values.storeLocation ? mapZoom : defaultZoom}
          defaultZoom={defaultZoom}
          onDrag={() => setDragging(true)}
          onDragEnd={({ center }) => {
            setDragging(false);
            // Set center map coordinates to location context
            setStoreLocation({ lat: center.lat(), lng: center.lng() });
          }}
        />

        {/* Map pin */}
        <div
          className={`delivery-map__pin ${
            dragging ? "delivery-map__pin--dragging" : ""
          }`}
        >
          <img src={require("./apple-round-push-pin.png")} alt={"pin"} />
        </div>
        <div
          className={`delivery-map__shadow ${
            dragging ? "delivery-map__shadow--dragging" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default StoreLocationMapGoogle;
