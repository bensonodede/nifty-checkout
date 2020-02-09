import React from "react";

// Import components
import Button from "components/button";

const CreateStoreFooter = ({ onClick, type, isDisabled }) => (
  <div className="create-store-footer">
    <Button onClick={onClick} type={type} isDisabled={isDisabled}>
      {type === "submit" ? <>Done</> : <>Next</>}
    </Button>
  </div>
);

export default CreateStoreFooter;
