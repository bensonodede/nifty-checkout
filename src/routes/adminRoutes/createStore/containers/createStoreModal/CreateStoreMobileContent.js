import React from "react";

// Import components
import { Loader } from "components/loader";

// Import styles
import "./styles.scss";

const CreateStoreMobileContent = () => (
  <div className="create-store-modal-mobile">
    <div>
      {/* Create store emoji */}
      <h1 className="has-text-centered is-size-4">
        <span role="img" aria-label="emoji">
          🛠️
        </span>
      </h1>

      {/* Create store title */}
      <h1 className="title is-size-4 has-text-centered is-marginless">
        We are setting up your store.
      </h1>

      {/* Create store sub-title */}
      <p className="has-text-centered">
        This will take a minute, hang in there...
      </p>
    </div>

    {/* Create store loader */}
    <div className="create-store-modal-mobile__loader">
      <Loader />
    </div>
  </div>
);

export default CreateStoreMobileContent;
