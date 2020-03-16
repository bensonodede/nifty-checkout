import React from "react";

// Import components
import { SignOut } from "components/auth";

const HomeFooter = () => {
  return (
    <div className="column is-10">
      <SignOut>
        <div className="home-footer__logout-container">
          <div className="home-footer__logout">
            <h1 className="title is-size-6 has-text-centered is-marginless">
              Log out
            </h1>
          </div>
        </div>
      </SignOut>
    </div>
  );
};

export default HomeFooter;
