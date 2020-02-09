import React from "react";

// Import components
import Button from "components/button";

const StoreFormFooter = ({ isDisabled, isLoading }) => (
  <div className="edit-product-footer">
    <Button
      type={"submit"}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isLight
    >
      Save
    </Button>
  </div>
);
export default StoreFormFooter;
