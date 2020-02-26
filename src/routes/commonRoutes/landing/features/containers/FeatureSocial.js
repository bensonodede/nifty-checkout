import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

const FeatureSocial = () => (
  <div className="column is-11-desktop">
    <div className="feature-container">
      {/*  */}
      <div>
        <h1 className="title is-size-2">
          Never say <br /> "Text/Call me to order" <br /> again.
        </h1>

        <p className="is-size-5-desktop has-text-grey-light">
          Sell where your customers are. Send them to your store and we'll do
          the rest.
        </p>

        <hr className="feature-divider" />

        <ul className="features__list">
          <li className="features__list-item title is-size-5">
            <div className="features__list-icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
            Integrate with your social media channels
          </li>

          <li className="features__list-item title is-size-5">
            <div className="features__list-icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
            No sign ups
          </li>

          <li className="features__list-item title is-size-5">
            <div className="features__list-icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
            No checkout forms
          </li>

          <li className="features__list-item title is-size-5">
            <div className="features__list-icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
            One click to buy anything
          </li>
        </ul>
      </div>

      {/*  */}
      <img
        className="feature-img feature-img--right"
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582718329/web_assets/feature-social.png"
        }
        alt={"Sell on social media"}
      />
    </div>
  </div>
);

export default FeatureSocial;
