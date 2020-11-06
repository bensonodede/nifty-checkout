import React from "react";

const FeatureItemDescription = ({
  item: { sectiontitle, title, features },
}) => (
  <div className="column is-10-mobile is-5-tablet is-4-desktop">
    {/* Feature section title */}
    <h1 className="feature-section-title title">{sectiontitle}</h1>

    {/* Feature title */}
    <h1 className="title is-size-3-mobile is-size-3-tablet is-size-2-desktop is-marginless">
      {title}
    </h1>

    {/* Feature list */}
    <div className="feature-sub-list">
      {features.map(({ id, subtitle, description }) => (
        <div key={id} className="feature-sub-item">
          <h5 className="title is-marginless is-size-6-mobile is-size-6-tablet is-size-5-desktop">
            {subtitle}
          </h5>
          <p className="has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureItemDescription;
