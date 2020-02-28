import React from "react";
import { Breakpoint } from "react-socks";

const HeroFooter = ({ inView, onClick }) => (
  <div className="hero-foot">
    <img
      className="hero-footer__image"
      src={
        "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582898672/web_assets/landing-hero.png"
      }
      alt={"Product images"}
    />
  </div>
);

export default HeroFooter;
