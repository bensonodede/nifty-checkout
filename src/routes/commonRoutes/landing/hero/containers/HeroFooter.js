import React from "react";
import { Breakpoint } from "react-socks";

// Import components
import { ImgLoader } from "components/loader";

const HeroFooter = () => (
  <div className="hero-foot ">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10-mobile is-11-tablet is-12-desktop">
          {/* Mobile footer */}
          <Breakpoint mobile only>
            <ImgLoader
              className="hero-footer__image"
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582905033/web_assets/landing-hero-mobile.png"
              }
              alt={"Product images"}
            />
          </Breakpoint>

          {/* Tablet & Desktop footer */}
          <Breakpoint tablet up>
            <ImgLoader
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
