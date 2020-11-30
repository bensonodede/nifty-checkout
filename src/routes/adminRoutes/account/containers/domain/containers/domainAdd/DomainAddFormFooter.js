import React from "react";

// Import components
import Button from "components/button";

const DomainAddFormFooter = ({ isValid, touched, isLoading }) => {
  // Check if form is touched and valid
  let formValid = !!(isValid && touched.domainName);

  return (
    <div className="domain-add__form-footer">
      <Button
        type={"submit"}
        isDisabled={!formValid || isLoading}
        isLoading={isLoading}
        isLight
        isFullWidth
      >
        Add domain
      </Button>
    </div>
  );
};

export default DomainAddFormFooter;
