import React from "react";
import { Helmet } from "react-helmet";

// Import components
import HeroNavbar from "../heroNavbar";

// Import styles
import "./styles.scss";

// Import data
const privacyData = require("./privacy.json");

const Privacy = () => (
  <>
    {/* Document title */}
    <Helmet title={"Finn · Privacy policy"} />

    {/* Navigation bar */}
    <HeroNavbar />

    {/* Privacy page */}
    <div className="route-wrapper-landing">
      <div className="container">
        <div className="columns is-multiline is-centered is-mobile">
          <div className="column is-10">
            {/* Privacy header */}
            <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered terms-title">
              Privacy policy
            </h1>

            {/* Privacy list */}
            {privacyData.map(item => (
              <div key={item.id} className="terms-item">
                <h1 className="title is-size-4-mobile is-size-4-tablet is-size-3-desktop">
                  {item.title}
                </h1>
                <p className="is-size-6-mobile is-size-6-tablet is-size-5-desktop has-text-grey-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Privacy;
