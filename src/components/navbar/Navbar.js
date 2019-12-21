import React from "react";
import { Breakpoint } from "react-socks";

// Import components
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

const Navbar = () => (
  <>
    {/* Mobile Navbar */}
    <Breakpoint tablet down>
      <MobileNavbar />
    </Breakpoint>

    {/* Desktop navbar */}
    <Breakpoint desktop up>
      <DesktopNavbar />
    </Breakpoint>
  </>
);

export default Navbar;
