import React from "react";
import { useHistory } from "react-router-dom";
import { useFormikContext } from "formik";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";

const StoreLocationPreviewButton = () => {
  // Get history function
  let history = useHistory();

  // Get formik values
  let {
    values: { storeLocation },
  } = useFormikContext();

  return (
    <Button
      onClick={() => history.push("/create-store/store-location-map")}
      type={"button"}
      isFullWidth
      isOutline
      className="store-location-preview__button"
    >
      {/* Location icon */}
      <Icon
        icon={ic_location_on}
        size={"100%"}
        className="store-location-preview__button-icon"
      />
      <span>{storeLocation ? "Change location" : "Set location"}</span>
    </Button>
  );
};

export default StoreLocationPreviewButton;
