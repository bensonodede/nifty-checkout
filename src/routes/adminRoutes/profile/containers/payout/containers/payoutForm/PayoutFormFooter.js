import React from "react";

//
import Button from "components/button";

const PayoutFormFooter = ({ isDisabled, isLoading }) => (
  <div className="payout-form-footer">
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

export default PayoutFormFooter;
