import React from "react";

const HomeItemEmoji = ({ emoji }) => (
  <span role="img" aria-label={"emoji"} className="home-item__emoji">
    {emoji}
  </span>
);

export default HomeItemEmoji;
