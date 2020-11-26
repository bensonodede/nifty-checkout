import React from "react";

// Import components
import SettingsItem from "./SettingsItem";

// Import settings items
const data = require("./settingsItem.json");

const SettingsList = () => (
  <div className="column is-10">
    <div className="settings-list">
      {data.map((item) => (
        <SettingsItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default SettingsList;
