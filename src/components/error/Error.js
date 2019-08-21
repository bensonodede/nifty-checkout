import React from "react";

// Import styles
import "./styles.css";

const Error = () => (
  <div className="App-container error">
    {/* Error title */}
    <h1 className="error__title">Oops, something went wrong.</h1>

    {/* Error button row */}
    <div className="error__btn-row">
      {/* Error button */}
      <button onClick={() => window.location.reload()} className="error__btn">
        Try again
      </button>

      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="error__btn error__btn-clear"
      >
        Back
      </button>
    </div>

    {/* Error image */}
    <img
      className="error__img"
      alt={"no_internet"}
      src={
        "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625964/web_assets/pablo-no-connection.png"
      }
    />
  </div>
);

export default Error;
