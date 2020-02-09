import React from "react";

// Import components
import { SignOut } from "components/auth";

const HomeFooter = () => {
  return (
    <div className="column is-10">
      <SignOut>
        <h1 className="title is-size-6 has-text-centered">Log out</h1>
      </SignOut>
    </div>
  );
};

export default HomeFooter;
