import React from "react";
import { withRouter, Link } from "react-router-dom";

// Import components
import ProfileDashboardItemEmoji from "./ProfileDashboardItemEmoji";
import ProfileDashboardItemContent from "./ProfileDashboardItemContent";

const ProfileDashboardItem = ({
  match,
  item: { emoji, title, subtitle, link },
}) => {
  // Destructure params
  let { storeUsername } = match.params;

  return (
    <Link to={`/${storeUsername}/admin/profile/${link}`}>
      <div className="home-item">
        <ProfileDashboardItemEmoji emoji={emoji} />
        <ProfileDashboardItemContent title={title} subtitle={subtitle} />
      </div>
    </Link>
  );
};

export default withRouter(ProfileDashboardItem);
