import React from "react";
import { withRouter, Link } from "react-router-dom";

const SettingsItem = ({ match, item: { emoji, title, subtitle, link } }) => {
  // Destructure params
  let { storeUsername } = match.params;

  return (
    <Link to={`/${storeUsername}/admin/profile/${link}`}>
      <div className="settings-item">
        {/* Emoji */}
        <span
          role="img"
          aria-label={"emoji"}
          className="settings-item__emoji is-size-4"
        >
          {emoji}
        </span>

        <div className="settings-item__content">
          {/* Header */}
          <div className="settings-item__title">
            <h1 className="title is-size-5 is-marginless">{title}</h1>
          </div>

          {/* Sub-title */}
          <p className="is-marginless has-text-grey-light">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(SettingsItem);
