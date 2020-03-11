import React from "react";
import { CSSTransition } from "react-transition-group";

// Import components
import MobileNavbarItem from "./MobileNavbarItem";
import MobileStoreLink from "./MobileStoreLink";

// Import navigation data
const data = require("../mobileNavbar.json");

const MobileNavbarMenu = ({ isOpen, toggleMobileNavbar }) => {
  return (
    <CSSTransition
      appear={true}
      unmountOnExit={true}
      in={isOpen}
      classNames="mobile-navbar-menu__animation"
      timeout={750}
    >
      <div className="mobile-navbar-menu">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10">
              {/* Menu items */}
              {data.map(item => (
                <MobileNavbarItem
                  key={item.id}
                  item={item}
                  toggleMobileNavbar={toggleMobileNavbar}
                />
              ))}

              {/* Menu link to store*/}
              <MobileStoreLink />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default MobileNavbarMenu;
