import React from "react";

// Import components
import { NavbarLinks, NavbarAccount, NavbarStoreLink } from "./containers";

// Import styles
import "./styles.scss";

const DesktopNavbar = () => (
  <div className="desktop-navbar">
    {/* Navbar links */}
    <NavbarLinks />

    <div className="desktop-navbar__right">
      {/* Navbar account */}
      <NavbarAccount />

      {/* Navbar go to store */}
      <NavbarStoreLink />
    </div>
  </div>
);

export default DesktopNavbar;
