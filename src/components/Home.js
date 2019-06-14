import React, { Component } from "react";

// Import styles
import "../styles/index.css";
import { Loader } from "./loader";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-container">
          <Loader />
        </div>

        {/* Home footer  */}
        <div className="footer">
          <div className="footer__body">
            <button
              onClick={this.triggerModal}
              className="footer__btn footer__btn--large"
            >
              Start here
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
