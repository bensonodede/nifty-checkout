import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavbarLogo = ({ match }) => {
  // Destructure params
  let { storeName } = match.params;

  return (
    <NavLink to={`/${storeName}/admin/profile`} className="navbar-logo">
      <img
        className="navbar-logo__img"
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382652/web_assets/finn_pink.png"
        }
        alt={"finn logo"}
      />
    </NavLink>
  );
};

export default withRouter(NavbarLogo);
