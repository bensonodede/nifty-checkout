import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import CreateStoreFooter from "../CreateStoreFooter";

const IntroHeader = ({ history }) => (
  <>
    {/* Intro title */}
    <h1 className="title is-size-3 is-marginless">
      Let's get started creating your store.
    </h1>

    {/* Intro sub-title */}
    <p className="is-size-6 has-text-grey-light">
      ( It's going to be awesome!{" "}
      <span role="img" aria-label="emoji">
        🙌
      </span>{" "}
      )
    </p>

    {/* Intro form footer */}
    <CreateStoreFooter
      onClick={() => history.push("/create-store/store-name")}
      btnType={"button"}
    />
  </>
);

export default withRouter(IntroHeader);
