import React from "react";

// Import components
import Button from "components/button";

const StoreFormFooter = ({ isDisabled }) => (
  <div className="account__form-footer">
    <Button type={"submit"} isDisabled={isDisabled} isLight>
      Save
    </Button>
  </div>
);
export default StoreFormFooter;
