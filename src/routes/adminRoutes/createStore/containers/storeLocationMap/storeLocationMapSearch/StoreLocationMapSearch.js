import React, { useState, useEffect, useContext } from "react";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { useFormikContext } from "formik";

// Import components
import StoreLocationMapSearchField from "./StoreLocationMapSearchField";
import StoreLocationMapSearchList from "./StoreLocationMapSearchList";
import StoreLocationMapContext from "../StoreLocationMapContext";

// Import functions
import { handleLocationChange } from "./functions";

// Import styles
import "./styles.scss";

const StoreLocationMapSearch = () => {
  // Search modal open state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Use Places Autocomplete hook
  const { suggestions, setValue: setSearchValue } = usePlacesAutocomplete({
    requestOptions: {
      // Options to bias search results
      // Radius from location center (10,000 metres)
      radius: 10000,
      // Location center set to Nairobi
      location: new window.google.maps.LatLng(-1.286389, 36.817223),
    },
    debounce: 300,
  });

  // Destructure context hooks
  const { storeLocation } = useContext(StoreLocationMapContext);
  const { setFieldValue, values } = useFormikContext();

  // If map pin moves
  useEffect(() => {
    // If selected location is not null / empty
    if (storeLocation) {
      handleLocationChange({
        storeLocation,
        getGeocode,
        setFieldValue,
        setSearchValue,
      });
    }
  }, [storeLocation]);

  // On search value change
  useEffect(() => {
    setSearchValue(values.storeLocationAddress);
  }, [values.storeLocationAddress]);

  return (
    <div
      className={`delivery-search ${
        isSearchOpen ? "delivery-search--open" : ""
      }`}
    >
      {/* Search field */}
      <StoreLocationMapSearchField
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
      />

      {/* Delivery search list */}
      <StoreLocationMapSearchList
        setSearchValue={setSearchValue}
        searchSuggestions={suggestions}
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
      />
    </div>
  );
};

export default StoreLocationMapSearch;
