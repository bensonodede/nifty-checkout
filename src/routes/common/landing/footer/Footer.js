import React from "react";
import { Link } from "react-router-dom";

// Import components

// Import styles
import "./styles.scss";

const Footer = () => (
  <footer className="footer has-background-grey-dark">
    <div className="columns is-multiline is-centered">
      {/* Footer links & logo container */}
      <div className="column is-8">
        <div className="columns is-multiline is-centered">
          {/* Footer logo */}
          <div className="column is-full">
            <div className="footer__logo-container">
              <img
                className={"footer__logo"}
                alt={"Finn logo"}
                src={
                  "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
                }
              />
            </div>
          </div>
          {/* End Footer logo */}

          {/* Footer link list */}
          <div className="column has-text-centered-mobile is-8-tablet is-5-desktop ">
            <div className="content footer__list">
              <Link to={"/talk-to-us"} className="has-text-white">
                <p>Talk to us</p>
              </Link>

              {/* <Link to={"/about-us"} className="has-text-white">
                  <p>About us</p>
                </Link>

                <Link to={"/"} className="has-text-white">
                  <p>Terms</p>
                </Link>

                <Link to={"/"} className="has-text-white">
                  <p>Privacy</p>
                </Link> */}
            </div>
          </div>
          {/* End footer link list */}
        </div>
      </div>
      {/* End Footer links & logo container */}

      {/* Footer copyright */}
      <div className="column is-8">
        <div className="content is-size-7-mobile is-size-7 has-text-light has-text-centered">
          <p>© 2019 Finn. All rights reserved.</p>
        </div>
      </div>
      {/* End Footer copyright */}
    </div>
  </footer>
);

export default Footer;
