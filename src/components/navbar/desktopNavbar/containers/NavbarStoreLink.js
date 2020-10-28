import React, { useRef } from "react";
import { withRouter } from "react-router-dom";

// Import components
import Tooltip from "components/tooltip";

const NavbarStoreLink = ({
  match: {
    params: { storeUsername },
  },
}) => {
  // Link ref
  const storeLinkRef = useRef();

  return (
    <>
      {/* Store link */}
      <div ref={storeLinkRef} className="navbar-store-link__wrapper">
        <a
          href={`https://${storeUsername}.withfinn.shop`}
          target={"_blank"}
          className="navbar-store-link"
        >
          <h1 className="navbar-store-link__emoji">
            {/* Emoji */}
            <span role="img" aria-label="pointing emoji">
              👉
            </span>
          </h1>
        </a>
      </div>

      {/* Tooltip */}
      <Tooltip text={"Visit store"} ref={storeLinkRef} />
    </>
  );
};

export default withRouter(NavbarStoreLink);
