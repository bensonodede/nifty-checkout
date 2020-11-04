import React from "react";

const FeatureItemImage = ({ image }) => (
  <div className="column is-full-mobile is-5-tablet is-5-desktop">
    <img src={image} alt={"feature item"} />
  </div>
);

export default FeatureItemImage;
