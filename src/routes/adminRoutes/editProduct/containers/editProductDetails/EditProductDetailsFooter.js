import React from "react";

// Import components
import Button from "components/button";

// Import styles
import "./styles.scss";

const EditProductDetailsFooter = ({
  onClick,
  isDisabled,
  isLoading,
  isFilesUploaded,
}) => (
  <div className="add-product-details-footer">
    <Button
      onClick={onClick}
      type={"submit"}
      isDisabled={isDisabled || isLoading || !isFilesUploaded}
      isLoading={isLoading}
      isLight
    >
      Save
    </Button>
  </div>
);

export default EditProductDetailsFooter;
