import React from "react";
import { Breakpoint } from "react-socks";

const HeroFooter = ({ inView, onClick }) => (
  <div className="hero-foot">
    {/* Tablet and desktop illustration */}
    <Breakpoint tablet up>
      <img
        className="hero-footer__image"
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1582555458/web_assets/Group_of_people-desktop.png"
        }
        alt={"A group of illustrated characters"}
      />
    </Breakpoint>

    {/* Mobile illustration */}
    <Breakpoint mobile only>
      <img
        className="hero-footer__image"
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1582555457/web_assets/Group_of_people-mobile.png"
        }
        alt={"A group of illustrated characters"}
      />
    </Breakpoint>
  </div>
);

export default HeroFooter;
