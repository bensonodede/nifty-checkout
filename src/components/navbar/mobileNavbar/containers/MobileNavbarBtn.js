import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { ic_expand_more } from "react-icons-kit/md/ic_expand_more";

const MobileNavbarBtn = ({ toggleMobileNavbar, isOpen }) => (
  <div className="mobile-navbar-btn">
    <div onClick={toggleMobileNavbar} className="mobile-navbar-btn__wrapper">
      {/* Navbar button logo */}
      <img
        className={"mobile-navbar-btn__img"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1583742008/web_assets/finn-favicon-logo.png"
        }
        alt={"finn logo"}
      />

      {/* Navbar button icon */}
      <div className={`mobile-navbar-btn__icon${isOpen ? ` open ` : ``}`}>
        <Icon icon={ic_expand_more} size={"100%"} />
      </div>
    </div>
  </div>
);

export default MobileNavbarBtn;
