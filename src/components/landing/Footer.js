import React from "react";

const Footer = () => (
  <div className="landing__footer">
    {/* Footer logo */}

    <div className="landing__footer-logo">
      <img
        className={"landing__footer-logo-img"}
        alt={"isle99-logo"}
        src={require("../../images/isle99_pink.png")}
      />
    </div>

    {/* Footer links  */}
    <div className="landing__footer-links">
      {/* <p className="landing__footer-text">Help</p> */}
    </div>
  </div>
);

export default Footer;
