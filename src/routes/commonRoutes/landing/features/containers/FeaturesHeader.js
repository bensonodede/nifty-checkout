import React from "react";

const FeaturesHeader = () => (
  <div className="column is-11-mobile is-10-tablet is-8-desktop">
    <div className="features__header ">
      <p className="has-text-grey-light has-text-centered is-size-6-mobile is-size-5-tablet is-size-8-desktop ">
        "DM/Call to order" can be frustrating for customers. Finn makes it
        seamless to shop from your Instagram page.
      </p>

      <h1 className="title has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-desktop">
        See what you can do with it.{" "}
        <span role="img" aria-label="emoji pointing down">
          👇🏾
        </span>
      </h1>
    </div>
  </div>
);

export default FeaturesHeader;
