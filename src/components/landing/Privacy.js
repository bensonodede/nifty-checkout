import React, { Component } from "react";
import { Helmet } from "react-helmet";
// Import privacy policy json file
const privacyData = require("./privacy.json");

class Privacy extends Component {
  render() {
    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Finn - Privacy policy</title>
        </Helmet>

        <div className="App-container">
          {/* Header logo */}
          <div className="landing__logo-container">
            <img
              className={"landing__logo"}
              alt={"finn logo"}
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
              }
            />
          </div>

          {/* Page title */}
          <h1 className="privacy__title">Privacy policy</h1>

          {/* Start Privacy policy items */}
          {privacyData.map(item => (
            <div key={item.id}>
              <h3 className="privacy__sub-title">{item.title}</h3>
              <p className="privacy__text">{item.description}</p>
            </div>
          ))}
          {/* End Privacy policy items */}
        </div>
      </div>
    );
  }
}

export default Privacy;
