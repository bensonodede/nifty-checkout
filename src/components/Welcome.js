import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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
          <h1 className="header__welcome-title">Welcome to Nifty.</h1>
          <p className="header__welcome-sub-title">
            Beautiful. Simple. Checkouts.
          </p>
        </div>

        {/*  */}
        <div className="welcome-footer">
          <div>
            <Link to="/signup/store-name">
              <button className="welcome-btn welcome-btn--dark">Sign up</button>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <button className="welcome-btn">I have an account</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
