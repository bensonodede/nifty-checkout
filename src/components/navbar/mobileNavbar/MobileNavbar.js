import React from "react";

// Import hooks
import useMobileNavbar from "./useMobileNavbar";

// Import components
import { MobileNavbarBtn, MobileNavbarMenu } from "./containers";

// Import styles
import "./styles.scss";

const MobileNavbar = () => {
  // Mobile navbar hook
  const [isOpen, toggleMobileNavbar] = useMobileNavbar(false);

  return (
    <div className="mobile-navbar">
      {/* Mobile navbar menu btn */}
      <MobileNavbarBtn
        toggleMobileNavbar={toggleMobileNavbar}
        isOpen={isOpen}
      />

      {/* Mobile navbar menu */}
      <MobileNavbarMenu toggleMobileNavbar={toggleMobileNavbar} isOpen={isOpen} />
    </div>
  );
};

export default MobileNavbar;
