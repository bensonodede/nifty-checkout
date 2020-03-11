import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavbarLogo = ({ match }) => {
  // Destructure params
  let { storeUsername } = match.params;

  return (
    <NavLink to={`/${storeUsername}/admin`} className="navbar-logo">
      <img
        className="navbar-logo__img"
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1583742008/web_assets/finn-logo.png"
        }
        alt={"finn logo"}
      />
    </NavLink>
  );
};

export default withRouter(NavbarLogo);
