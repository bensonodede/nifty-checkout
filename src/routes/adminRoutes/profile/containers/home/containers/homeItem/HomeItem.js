import React from "react";
import { withRouter, Link } from "react-router-dom";

// Import components
import HomeItemEmoji from "./HomeItemEmoji";
import HomeItemContent from "./HomeItemContent";

const ProfileItem = ({ match, item: { emoji, title, subtitle, link } }) => {
  // Destructure params
  let { storeUsername } = match.params;

  return (
    <Link to={`/${storeUsername}/admin/profile/${link}`}>
      <div className="home-item">
        <HomeItemEmoji emoji={emoji} />
        <HomeItemContent title={title} subtitle={subtitle} />
      </div>
    </Link>
  );
};

export default withRouter(ProfileItem);
