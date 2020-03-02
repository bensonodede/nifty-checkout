import React from "react";
import { Breakpoint } from "react-socks";

const HeroFooter = () => (
  <div className="hero-foot ">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-11-mobile is-12-tablet is-12-desktop">
          {/* Mobile footer */}
          <Breakpoint mobile only>
            <img
              className="hero-footer__image"
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582925826/web_assets/landing-hero-mobile.png"
              }
              alt={"Product images"}
            />
          </Breakpoint>

          {/* Tablet & Desktop footer */}
          <Breakpoint tablet up>
            <img
              className="hero-footer__image"
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582905033/web_assets/landing-hero-desktop.png"
              }
              alt={"Product images"}
            />
          </Breakpoint>
        </div>
      </div>
    </div>
  </div>
);

export default HeroFooter;
