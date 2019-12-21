import React from "react";

// Import components
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";

// Import navbar links
const data = require("../desktopNavbar.json");

const NavbarLinks = () => (
  <div className="navbar-links">
    {/* Navbar logo */}
    <NavbarLogo />

    {/* Navbar item */}
    {data.map(item => (
      <NavbarItem item={item} key={item.id} />
    ))}
  </div>
);

export default NavbarLinks;
