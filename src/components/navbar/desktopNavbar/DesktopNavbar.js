import React from "react";

// Import components
import { NavbarLinks, NavbarProfile } from "./containers";

// Import styles
import "./styles.scss";

const DesktopNavbar = () => (
  <div className="desktop-navbar">
    {/* Navbar links */}
    <NavbarLinks />

    {/* Navbar profile */}
    <NavbarProfile />
  </div>
);

export default DesktopNavbar;
