import React from "react";

// Import components
import { SignOut } from "components/auth";
import Button from "components/button";

const GridFooter = () => (
  <SignOut>
    <div className="grid-footer__logout-container">
      <Button isOutline>Log out</Button>
    </div>
  </SignOut>
);

export default GridFooter;
