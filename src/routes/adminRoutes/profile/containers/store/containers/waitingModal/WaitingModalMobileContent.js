import React from "react";

// Import components
import { ProgressLoader } from "components/loader";

// Import styles
import "./styles.scss";

const WaitingModalMobileContent = ({ percentageLoading }) => (
  <div className="create-store-modal-mobile">
    <div>
      {/* Waiting modal edit-store emoji */}
      <h1 className="has-text-centered is-size-4">
        <span role="img" aria-label="emoji">
          🛠️
        </span>
      </h1>

      {/* Waiting modal edit-store title */}
      <h1 className="title is-size-4 has-text-centered is-marginless">
        We are setting up your store.
      </h1>

      {/* Waiting modal edit-store sub-title */}
      <p className="has-text-centered">
        This will take a minute, hang in there...
      </p>
    </div>

    {/* Waiting modal edit-store loader */}
    <div className="create-store-modal-mobile__loader">
      <ProgressLoader percent={percentageLoading} />
    </div>
  </div>
);

export default WaitingModalMobileContent;
