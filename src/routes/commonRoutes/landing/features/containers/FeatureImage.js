import React from "react";

const FeatureImage = ({ image }) => (
  <div className="column is-11-mobile is-5-tablet is-5-desktop">
    <img src={image} alt={"feature item"} />
  </div>
);

export default FeatureImage;
