import React from "react";

// Import components
import { ProgressLoader } from "components/loader";

// Import styles
import "./styles.scss";

const WaitingModalDesktopContent = ({ percentageLoading }) => (
  <div className="create-store-modal-desktop">
    <div>
      {/* Waiting modal edit-store emoji */}
      <h1 className="has-text-centered is-size-4">
        <span role="img" aria-label="emoji">
          🛠️
        </span>
      </h1>

      {/* Waiting modal edit-store title */}
      <h1 className="title is-size-4 has-text-centered is-marginless">
        We are setting up your store. <br />
      </h1>

      {/* Waiting modal edit-store sub-title */}
      <p className="has-text-centered">
        This will take a minute, hang in there...
        <br />
        It's safe to let this run in the background while
        <br /> you do other things.{" "}
        <span role="img" aria-label="emoji">
          🤗
        </span>
      </p>
    </div>

    {/* Waiting modal edit-store loader */}
    <div className="create-store-modal-desktop__loader">
      <ProgressLoader percent={percentageLoading} />
    </div>
  </div>
);

export default WaitingModalDesktopContent;
