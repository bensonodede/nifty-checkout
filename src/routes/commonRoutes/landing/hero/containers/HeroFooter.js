import React from "react";
import { Breakpoint } from "react-socks";

const HeroFooter = () => (
  <div className="hero-foot">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-fullwidth is-paddingless">
          {/* Mobile footer */}
          <Breakpoint mobile only>
            <img
              className="hero-footer__image"
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1582925826/web_assets/landing-hero-mobile.png"
              }
              alt={"Hero banner"}
            />
          </Breakpoint>

          {/* Tablet & Desktop footer */}
          <Breakpoint tablet up>
            <img
              className="hero-footer__image"
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1582905033/web_assets/landing-hero-desktop.png"
              }
              alt={"Hero banner"}
            />
          </Breakpoint>
        </div>
      </div>
    </div>
  </div>
);

export default HeroFooter;
