import React, { useContext } from "react";
import { useFormikContext } from "formik";
import { getGeocode, getLatLng } from "use-places-autocomplete";

// Import components
import StoreLocationMapContext from "../StoreLocationMapContext";
import { Icon } from "react-icons-kit";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";

const StoreLocationMapSearchItem = ({
  item: {
    description,
    structured_formatting: { main_text, secondary_text },
  },
  setSearchValue,
  setIsSearchOpen,
}) => {
  // Destructure hooks
  const { setStoreLocation, setMapZoom } = useContext(StoreLocationMapContext);
  const { setFieldValue } = useFormikContext();

  // Handle selection function
  const handleSelect = async () => {
    // Close search list
    setIsSearchOpen(false);

    // Set selected value to formik search input field
    await setFieldValue("storeLocationAddress", description);

    // Set selected value to usePlacesAutocomplete search value,(false: Do not refetch)
    await setSearchValue(description, false);

    // Get geocode results from selected value description
    let geoCodeResults = await getGeocode({ address: description });

    // Get latitude and longitude from geocode results
    let { lat, lng } = await getLatLng(geoCodeResults[0]);

    // Set selected location to context
    await setStoreLocation({ lat, lng });

    // Set zoom location to context
    setMapZoom(18);
  };

  return (
    <div className="delivery-search-item" onClick={handleSelect}>
      {/* List item icon */}
      <Icon
        icon={ic_location_on}
        size={"100%"}
        className={"delivery-search-item__icon"}
      />

      {/* List item text */}
      <div className="delivery-search-item__text-wrapper">
        <h5 className="is-marginless has-text-grey-darker is-size-6 delivery-search-item__text-main">
          {main_text}
        </h5>
        <p className="is-marginless has-text-grey-light delivery-search-item__text-secondary">
          {secondary_text}
        </p>
      </div>
    </div>
  );
};

export default StoreLocationMapSearchItem;
