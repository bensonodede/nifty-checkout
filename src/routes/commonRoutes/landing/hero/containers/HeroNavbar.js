import React from "react";
import { Link } from "react-router-dom";

// Import styles
import "./styles.scss";

const HeroNavbar = () => (
  <div className="hero-head hero-navbar">
    <Link to={"/"}>
      <img
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1583742008/web_assets/finn-logo.png"
        }
        alt={"finn logo"}
        className={"hero-navbar__logo"}
      />
    </Link>
  </div>
);

export default HeroNavbar;
