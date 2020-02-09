import React from "react";

// Import styles
import "./styles.scss";

const ErrorState = () => (
  <div className="error">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-9-mobile is-10-tablet is-10-desktop">
          {/* Error message */}
          <div className="content">
            <h1 className="title is-size-4 has-text-centered">
              Oops, something went wrong.
            </h1>

            <p className="is-size-6 has-text-centered">
              There was a problem loading this page. <br />
              Check your internet connection and try again.
            </p>
          </div>
        </div>

        {/* Error button */}
        <div className="column is-10 has-text-centered">
          <button
            onClick={() => window.location.reload()}
            className="button is-primary is-small"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ErrorState;
