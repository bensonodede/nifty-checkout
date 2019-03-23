import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import styles
import "../styles/index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-container">
          {/* Home header */}
          <div className="header">
            <h1 className="header__title">Welcome</h1>
          </div>
        </div>

        {/* Home footer  */}

        <div className="footer">
          <hr className="footer__border" />

          <div className="footer__body">
            <Link to={`/Store1/review`} style={{ textDecoration: "none" }}>
              <button className="footer__btn footer__btn--large">
                Start here
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
