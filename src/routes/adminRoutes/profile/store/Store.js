import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { StoreHeader, StoreForm } from "./containers";

// Import styles
import "./styles.scss";

const Store = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Edit personal info · ${storeUsername}`} defer={false} />

      {/* Store page */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <StoreHeader />
            <StoreForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
