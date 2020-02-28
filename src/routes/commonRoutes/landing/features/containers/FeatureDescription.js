import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

const FeatureDescription = ({ id, title, description, features }) => (
  <div className="column is-10-mobile is-5-tablet is-5-desktop">
    {/* Feature number */}
    <h1 className="title is-size-3-desktop is-marginless has-text-grey-lighter">
      {id}
    </h1>

    {/* Feature title */}
    <h1 className="title is-size-2-desktop">{title}</h1>

    {/* Feature description */}
    <p className="is-size-5-desktop has-text-grey-light">{description}</p>

    {/* Feature divider */}
    <hr className="feature-item__divider" />

    {/* Feature list */}
    <ul className="feature-item__list">
      {features.map(({ id, text }) => (
        <li
          key={id}
          className="feature-item__list-item title is-size-6-mobile is-size-6-tablet is-size-5-desktop"
        >
          <div className="feature-item__list-icon">
            <Icon icon={checkmark} size={"100%"} />
          </div>
          {text}
        </li>
      ))}
    </ul>
  </div>
);

export default FeatureDescription;
