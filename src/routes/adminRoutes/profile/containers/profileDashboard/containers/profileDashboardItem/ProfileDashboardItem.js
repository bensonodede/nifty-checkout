import React from "react";
import { withRouter, Link } from "react-router-dom";

// Import components
import ProfileDashboardItemEmoji from "./ProfileDashboardItemEmoji";
import ProfileDashboardItemContent from "./ProfileDashboardItemContent";
import Card from "components/card";

const ProfileDashboardItem = ({
  match,
  item: { emoji, title, subtitle, link },
}) => {
  // Destructure params
  let { storeUsername } = match.params;

  return (
    <Link to={`/${storeUsername}/admin/profile/${link}`}>
      <Card>
        <div className="home-item">
          <ProfileDashboardItemEmoji emoji={emoji} />
          <ProfileDashboardItemContent title={title} subtitle={subtitle} />
        </div>
      </Card>
    </Link>
  );
};

export default withRouter(ProfileDashboardItem);
