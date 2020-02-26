import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

const FeatureDashboard = () => (
  <div className="column is-11-desktop">
    <div className="feature-container">
      {/*  */}
      <img
        className="feature-img"
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582732928/web_assets/features-dashboard.png"
        }
        alt={"clean dashboard"}
      />

      {/*  */}
      <div>
        <h1 className="title is-size-2-desktop">
          Have it one place, <br /> Not all over the place.
        </h1>

        <p className="is-size-5 has-text-grey-light">
          A clean, simple dashboard to manage everything.
        </p>

        <hr className="feature-divider" />

        <ul className="features__list">
          <li className="features__list-item title is-size-5">
            <div className="features__list-icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
            Branded store
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default FeatureDashboard;
