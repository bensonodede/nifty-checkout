import React from "react";

// Import components
import StoreLocationPreviewMap from "./StoreLocationPreviewMap";
import StoreLocationPreviewButton from "./StoreLocationPreviewButton";
import StoreLocationPreviewAddress from "./StoreLocationPreveiwAddress";

// Import styles
import "./styles.scss";

const StoreLocationPreview = () => {
  return (
    <>
      {/* Address */}
      <StoreLocationPreviewAddress />

      {/* Preview map */}
      <StoreLocationPreviewMap />

      {/* Set location button */}
      <StoreLocationPreviewButton />
    </>
  );
};

export default StoreLocationPreview;
