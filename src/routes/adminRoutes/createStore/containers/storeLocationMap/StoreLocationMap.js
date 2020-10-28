import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";

// Import components
import { useScript } from "components/useHooks";
import { ErrorToast } from "components/toast";
import { PageLoader } from "components/loader";
import StoreLocationMapContext from "./StoreLocationMapContext";
import StoreLocationMapSearch from "./storeLocationMapSearch/";
import StoreLocationMapGoogle from "./storeLocationMapGoogle/";
import StoreLocationMapSubmit from "./storeLocationMapSubmit/";

// Import styles
import "./styles.scss";

const StoreLocationMap = () => {
  // Load Google Maps script
  const scriptStatus = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`
  );

  // Selected location coordinates and zoom level --> Pass state to context
  const [storeLocation, setStoreLocation] = useState(null);
  const [mapZoom, setMapZoom] = useState(null);

  // Formik state
  const { setFieldValue } = useFormikContext();

  // On delivery location change, set to formik
  useEffect(() => {
    if (storeLocation) {
      setFieldValue("storeLocation", storeLocation);
    }
  }, [storeLocation]);

  return (
    <div className="delivery">
      {/* Show loader while script is loading */}
      {scriptStatus === "loading" && <PageLoader />}

      {/* Render map and search once script is fully loaded */}
      {scriptStatus === "ready" && (
        <StoreLocationMapContext.Provider
          value={{
            storeLocation,
            setStoreLocation,
            mapZoom,
            setMapZoom,
          }}
        >
          {/* Store location search */}
          <StoreLocationMapSearch />

          {/* Store location map */}
          <StoreLocationMapGoogle />

          {/* Store location submit */}
          <StoreLocationMapSubmit />
        </StoreLocationMapContext.Provider>
      )}

      {/* Show error toast if script fails to load */}
      {scriptStatus === "error" && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </div>
  );
};

export default StoreLocationMap;
