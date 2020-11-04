import React from "react";

const ProfileDashboardItemContent = ({ title, subtitle }) => (
  <div className="home-item__content">
    {/* Profile Dashboard item header */}
    <div className="home-item__title">
      <h1 className="title is-size-5 is-marginless">{title}</h1>
    </div>

    {/* Profile Dashboard item sub-title */}
    <p className="is-marginless has-text-grey-light">{subtitle}</p>
  </div>
);

export default ProfileDashboardItemContent;
