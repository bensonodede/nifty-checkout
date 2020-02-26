import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

const FeatureStore = () => (
  <div className="column is-11-desktop">
    <div className="feature-container">
      {/*  */}
      <img
        className="feature-img"
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582663070/web_assets/feature-beautiful-store.png"
        }
        alt={"a beautiful store"}
      />

      {/*  */}
      <div className="feature-store__content">
        <h1 className="title is-size-2-desktop">
          A beautiful store. <br />
          For selling beautiful things.
        </h1>

        {/*  */}
        <p className="is-size-5 has-text-grey-light">
          A store that's just as beautiful as your brand.
        </p>

        {/* Divider */}
        <hr className="feature-divider" />

        {/*  */}
        <ul className="features__list">
          <li className="features__list-item title is-size-5">
            <div className="features__list-icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
            Branded store
          </li>

          <li className="features__list-item title is-size-5">
            <div className="features__list-icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
            Free sub-domain
          </li>

          <li className="features__list-item title is-size-5">
            <div className="features__list-icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
            Custom domains ( Coming soon )
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default FeatureStore;
