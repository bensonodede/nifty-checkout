import React from "react";
import { withRouter } from "react-router-dom";

const MobileStoreLink = ({
  match: {
    params: { storeUsername }
  }
}) => (
  <a
    className="mobile-store-link"
    href={`https://${storeUsername}.magicfinn.com`}
    target={"_blank"}
  >
    <h5 className="title is-size-3 is-marginless has-text-grey-lighter">
      Go to {storeUsername}{" "}
    </h5>
    <span
      role="img"
      aria-label="pointing emoji"
      className="mobile-store-link__emoji"
    >
      👉
    </span>
  </a>
);

export default withRouter(MobileStoreLink);
