import React from "react";

const StoreNameDescription = ({ values: { storeName } }) => (
  <>
    {/* Store username description */}
    <p className="has-text-grey-light is-size-6">
      Something sleek sounding or super weird. Make it memorable.{" "}
      <span role="img" aria-label="emoji">
        😎
      </span>
    </p>

    {/* Device illustration */}
    <div className="device-container">
      <div className="device">
        <h1 className="store-name-device-header title is-size-5">
          <span className="has-text-grey-lighter">
            Hey there, <br />
            welcome to <br />
          </span>
          {storeName ? <> {storeName}</> : <>Kickass kicks</>}.
          <span role="img" aria-label="emoji">
            👋🏾
          </span>
        </h1>
      </div>
    </div>
  </>
);

export default StoreNameDescription;
