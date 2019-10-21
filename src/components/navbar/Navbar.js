import React from "react";

// Import styles
import "./styles.scss";

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
      </div>
    </div>
  </nav>
);

export default Navbar;
