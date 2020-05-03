import React from "react";

// Import components
import ProfileDashboardItem from "../profileDashboardItem";

// Import data
const data = require("./profileDashboardList.json");

const ProfileDashboardList = () => (
  <div className="column is-10">
    <div className="home-list">
      {data.map((item) => (
        <ProfileDashboardItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default ProfileDashboardList;
