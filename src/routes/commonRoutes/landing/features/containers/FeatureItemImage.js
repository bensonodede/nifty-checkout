import React from "react";

const FeatureItemImage = ({ image }) => (
  <div className="column is-full-mobile is-5-tablet is-6-desktop">
    <img src={image} alt={"feature item"} className="feature-item__image"/>
  </div>
);

export default FeatureItemImage;
