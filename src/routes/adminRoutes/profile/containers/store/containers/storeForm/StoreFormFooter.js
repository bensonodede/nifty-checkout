import React from "react";

// Import components
import Button from "components/button";

const StoreFormFooter = ({ isDisabled }) => (
  <div className="edit-store-footer">
    <Button type={"submit"} isDisabled={isDisabled} isLight>
      Save
    </Button>
  </div>
);
export default StoreFormFooter;
