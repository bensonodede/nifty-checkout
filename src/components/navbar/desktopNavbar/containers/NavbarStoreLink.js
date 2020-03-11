import React from "react";
import { withRouter } from "react-router-dom";

const NavbarStoreLink = ({
  match: {
    params: { storeUsername }
  }
}) => (
  <a
    href={`https://${storeUsername}.magicfinn.com`}
    target={"_blank"}
    className="navbar-store-link"
  >
    <h1 className="navbar-store-link__emoji is-marginless">
      {/* Emoji */}
      <span role="img" aria-label="pointing emoji">
        👉
      </span>
    </h1>

    {/* Tooltip */}
    <h5 className="navbar-store-link__tooltip is-size-7 is-marginless">
      Go to store
    </h5>
  </a>
);

export default withRouter(NavbarStoreLink);
