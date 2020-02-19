import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { iosArrowForward } from "react-icons-kit/ionicons/iosArrowForward";

const HomeItemContent = ({ title, subtitle }) => (
  <div className="home-item__content">
    {/* Home item header */}
    <div className="home-item__title">
      <h1 className="title is-size-5 is-marginless">{title}</h1>
      <div className="home-item__icon">
        <Icon icon={iosArrowForward} size={"100%"} />
      </div>
    </div>

    {/* Home item sub-title */}
    <p className="is-marginless has-text-grey-light">{subtitle}</p>
  </div>
);

export default HomeItemContent;
