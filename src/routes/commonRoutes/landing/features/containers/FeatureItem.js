import React from "react";

// Import components
import FeatureItemImage from "./FeatureItemImage";
import FeatureItemDescription from "./FeatureItemDescription";

const FeatureItem = ({ item }) => (
  <div className="feature-item">
    <div className="columns is-mobile is-multiline is-centered is-vcentered is-variable is-4-tablet is-8-desktop">
      {/* Feature Image */}
      <FeatureItemImage image={item.image} />

      {/* Feature Description */}
      <FeatureItemDescription item={item} />
    </div>
  </div>
);

export default FeatureItem;
