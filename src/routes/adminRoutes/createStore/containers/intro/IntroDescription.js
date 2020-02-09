import React from "react";

const IntroDescription = () => (
  <>
    {/* Render on mobile */}
    <img
      src={require("images/create_store_mobile.png")}
      alt={"illustration"}
      className={"intro-mobile-illustration is-hidden-tablet"}
    />

    {/* Render on desktop and tablet */}
    <img
      src={require("images/create_store_desktop.png")}
      alt={"illustration"}
      className={"intro-desktop-illustration is-hidden-mobile"}
    />
  </>
);

export default IntroDescription;
