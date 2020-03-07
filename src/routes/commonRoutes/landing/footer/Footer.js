import React from "react";
import { Link } from "react-router-dom";

// Import components

// Import styles
import "./styles.scss";

const Footer = () => (
  <footer className="footer has-background-white">
    <div className="columns is-multiline is-centered">
      {/* Footer divider */}
      <hr className="footer__divider" />

      {/* Footer logo */}
      <div className="column is-full">
        <h1 className="title is-size-5-mobile is-size-5-tablet is-size-4-desktop has-text-centered">
          finn.
        </h1>
      </div>

      {/* Footer links & logo container */}
      <div className="column is-8">
        <div className="columns is-multiline is-centered">
          {/* Footer link list */}
          <div className="column has-text-centered-mobile is-8-tablet is-5-desktop ">
            <div className="content footer__list">
              <Link to={"/talk-to-us"}>
                <p className="is-size-6">Talk to us</p>
              </Link>

              <Link to={"/about"}>
                <p>About</p>
              </Link>

              <Link to={"/terms"}>
                <p>Terms</p>
              </Link>

              <Link to={"/privacy"}>
                <p>Privacy</p>
              </Link>
            </div>
          </div>
          {/* End footer link list */}
        </div>
      </div>
      {/* End Footer links & logo container */}

      {/* Footer copyright */}
      <div className="column is-8">
        <div className="content is-size-7-mobile is-size-7 has-text-centered">
          <p>© 2020 Finn. All rights reserved.</p>
        </div>
      </div>
      {/* End Footer copyright */}
    </div>
  </footer>
);

export default Footer;
