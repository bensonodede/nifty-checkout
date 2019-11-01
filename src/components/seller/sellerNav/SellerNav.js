import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

// Import styles
import "./styles.scss";

// Import menu items
const data = require("./nav.json");

const SellerNav = ({ match }) => {
  let { storeName } = match.params;

  return (
    <nav className="navbar seller-nav">
      {/* Navbar logo */}
      <div className="navbar-brand">
        <div className="navbar-item">
          <img
            className="seller-nav__logo"
            src={
              "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382652/web_assets/finn_pink.png"
            }
            alt={"finn logo"}
          />
        </div>
      </div>

      {/* Navbar links */}
      <div className="navbar-menu">
        <div className="navbar-start">
          {data.map(item => (
            <NavLink
              exact={item.exact}
              key={item.id}
              to={`/${storeName}/admin/${item.link}`}
              className="navbar-item seller-nav__item"
              activeClassName="seller-nav__item-active"
            >
              <div key={item.id}>
                <h5 className="is-marginless is-size-6">{item.title}</h5>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Navbar profile */}
        <div className="navbar-end">
          <Link
            to={`/${storeName}/profile`}
            className="navbar-item seller-nav__profile-container"
          >
            <div className="seller-nav__profile "></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(SellerNav);
