import React from "react";
import { Breakpoint } from "react-socks";

// Import components
import { ImgLoader } from "components/loader";

const HeroFooter = () => (
  <div className="hero-foot hero-foot--custom">
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
);

export default HeroFooter;
