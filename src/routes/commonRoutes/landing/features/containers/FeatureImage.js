import React from "react";

const FeatureImage = ({ image }) => (
  <div className="column is-10-mobile">
    <img src={image} alt={"feature item"} />
  </div>
);

export default FeatureImage;
