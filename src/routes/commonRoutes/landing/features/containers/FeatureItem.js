import React from "react";

// Import components
import FeatureImage from "./FeatureImage";
import FeatureDescription from "./FeatureDescription";

const FeatureItem = ({ item: { id, image, title, description, features } }) => (
  <div className="feature-item">
    <div
      key={id}
      className="columns is-mobile is-multiline is-centered is-vcentered is-variable is-8-desktop"
    >
      {/* Feature Image */}
      <FeatureImage image={image} />

      {/* Feature Description */}
      <FeatureDescription
        id={id}
        title={title}
        description={description}
        features={features}
      />
    </div>
  </div>
);

export default FeatureItem;
