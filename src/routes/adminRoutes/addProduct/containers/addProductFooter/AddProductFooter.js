import React from "react";

// Import components
import Button from "components/button";

// Import styles
import "./styles.scss";

const AddProductFooter = ({ onClick, type, isDisabled, isLoading }) => (
  <div className="add-product-footer">
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

export default AddProductFooter;
