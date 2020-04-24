import React from "react";

// Import components
import Button from "components/button";

// Import styles
import "./styles.scss";

const ErrorState = () => (
  <div className="columns is-multiline is-mobile is-centered">
    <div className="column is-10">
      <div className="product-list-empty">
        {/* List Empty Emoji */}
        <h1 className="title has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-desktop">
          <span role="img" aria-label="shrug emoji">
            💩
          </span>
        </h1>

        {/* List title */}
        <h1 className="title has-text-centered is-marginless is-size-4-mobile is-size-3-tablet is-size-3-desktop">
          Oops, something went wrong.
        </h1>

        {/* List sub-title */}
        <p className="has-text-centered has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop">
          Check your internet connection and try again.
        </p>

        {/* List button */}
        <Button onClick={() => window.location.reload()}>Reload</Button>
      </div>
    </div>
  </div>
);

export default ErrorState;
