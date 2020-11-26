import React from "react";

// Import components
import { ProgressLoader } from "components/loader";

// Import styles
import "./styles.scss";

const CreateStoreDesktopContent = ({ percentageLoading }) => (
  <div className="create-store-modal-desktop">
    <div>
      {/* Create store Emoji */}
      <h1 className="has-text-centered is-size-4">
        <span role="img" aria-label="emoji">
          🛠️
        </span>
      </h1>

      {/* Create store title */}
      <h1 className="title is-size-4 has-text-centered is-marginless">
        We are setting up your store. <br />
      </h1>

      {/* Create store sub-title */}
      <p className="has-text-centered has-text-grey-light">
        This will take a minute, hang in there...
      </p>
    </div>

    {/* Create store loader */}
    <div className="create-store-modal-desktop__loader">
      <ProgressLoader percent={percentageLoading} />
    </div>
  </div>
);

export default CreateStoreDesktopContent;
