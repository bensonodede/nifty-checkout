import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";
class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="App-heading">Welcome.</h1>
        <div className="Bottom-bar">
          <hr className="Line-separator" />
          <div className="Bottom-bar-container">
            <Link to="/User1/review" style={{ textDecoration: "none" }}>
              <button className="Btn Large-Btn">Next</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
