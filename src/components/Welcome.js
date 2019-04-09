import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "../styles/index.css";
import "../styles/welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="App-container welcome-page">
        <Helmet>
          <title>Welcome - Nifty</title>
        </Helmet>

        {/*  */}
        <div className="header">
          <h1 className="header__welcome-title">Welcome to nifty.</h1>
          <p className="header__welcome-sub-title">
            Beautiful, Simple checkout pages.
          </p>
        </div>

        {/*  */}
        <div className="welcome-image">
          <img
            src={require("../images/ginger-cat-online-shopping.png")}
            alt="welcome"
            className="welcome-photo"
          />
        </div>

        {/*  */}
        <div className="welcome-footer">
          <div>
            <button className="welcome-btn welcome-btn--dark">Sign up</button>
          </div>
          <div>
            <button className="welcome-btn">I have an account</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
