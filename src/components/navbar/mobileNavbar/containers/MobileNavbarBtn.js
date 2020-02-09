import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { iosArrowDown } from "react-icons-kit/ionicons/iosArrowDown";

const MobileNavbarBtn = ({ toggleMobileNavbar, isOpen }) => (
  <div className="mobile-navbar-btn">
    <div onClick={toggleMobileNavbar} className="mobile-navbar-btn__wrapper">
      {/* Navbar button logo */}
      <img
        className={"mobile-navbar-btn__img"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382652/web_assets/finn_pink.png"
        }
        alt={"finn logo"}
      />

      {/* Navbar button icon */}
      <div className={`mobile-navbar-btn__icon${isOpen ? ` open ` : ``}`}>
        <Icon icon={iosArrowDown} size={"100%"} />
      </div>
    </div>
  </div>
);

export default MobileNavbarBtn;
