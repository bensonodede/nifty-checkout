import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { iosArrowDown } from "react-icons-kit/ionicons/iosArrowDown";

// Import styles
import "./styles.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <div className="navbar-item">
        <img
          className="navbar__logo"
          alt={"finn logo"}
          src={
            "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
          }
        />
        <span className="nav">
          <Icon icon={iosArrowDown} width={"100%"} />
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
