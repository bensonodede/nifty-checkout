import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="landing__footer">
    {/* Footer logo */}

    <div className="landing__footer-logo">
      <img
        className={"landing__footer-logo-img"}
        alt={"finn logo"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382652/web_assets/finn_pink.png"
        }
      />
    </div>

    {/* Footer body */}
    <div className="landing__footer-body">
      {/* Footer row */}
      <Link to={"/talk-to-us"}>
        <div className="landing__footer-row">
          <p className="landing__footer-text">Talk to us</p>
        </div>
      </Link>
      {/* End Footer row */}
    </div>
  </div>
);

export default Footer;
