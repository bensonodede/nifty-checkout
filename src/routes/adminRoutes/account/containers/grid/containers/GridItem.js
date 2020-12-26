import React from "react";
import { withRouter } from "react-router-dom";

const GridItem = ({
  match,
  history,
  item: { emoji, title, subtitle, link },
}) => {
  // Destructure params
  let { storeUsername } = match.params;

  return (
    <div
      className="grid-item"
      onClick={() => history.push(`/${storeUsername}/admin/account/${link}`)}
    >
      {/* Emoji */}
      <span
        role="img"
        aria-label={"emoji"}
        className="grid-item__emoji is-size-4"
      >
        {emoji}
      </span>

      <div className="grid-item__content">
        {/* Header */}
        <div className="grid-item__title">
          <h1 className="title is-size-5 is-marginless">{title}</h1>
        </div>

        {/* Sub-title */}
        <p className="is-marginless has-text-grey-light is-size-6">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default withRouter(GridItem);
