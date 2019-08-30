import React from "react";
import { NavLink, withRouter } from "react-router-dom";

// Import menu links
const links = require("./menu.json");

const MenuList = props => {
  let { toggleBtn, toggleMenu } = props;
  let { storeName } = props.match.params;

  return (
    <div className="menu__body">
      {/* Menu logo */}
      <img
        className={"menu__logo"}
        alt={"finn-logo"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_charcoal.png"
        }
      />

      {/* Menu list items*/}
      <div className="menu__list">
        {/* Map menu links */}
        {links.map(item => (
          <NavLink
            onClick={() => {
              toggleMenu();
              toggleBtn();
            }}
            key={item.id}
            to={`/${storeName}/${item.link}`}
            className="menu__link"
            activeClassName="menu__link-active"
          >
            <h2 className="menu__item">{item.title}</h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default withRouter(MenuList);
