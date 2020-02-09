import React from "react";

// Import components
import { Loader } from "components/loader";

const WaitingModalContent = () => (
  <div className="waiting-modal">
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
      This will take a few seconds, hang in there...
    </p>

    {/* Create store loader */}
    <div className="waiting-modal__loader">
      <Loader />
    </div>
  </div>
);

export default WaitingModalContent;
