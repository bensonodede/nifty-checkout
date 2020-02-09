import React from "react";

// Import components
import Button from "components/button";

const EditProductFooter = ({ onClick, type, isDisabled, isLoading }) => (
  <div className="edit-product-footer">
    <Button
      onClick={onClick}
      type={type}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isLight
    >
      {type === "submit" ? <>Done</> : <>Next</>}
    </Button>
  </div>
);

export default EditProductFooter;
