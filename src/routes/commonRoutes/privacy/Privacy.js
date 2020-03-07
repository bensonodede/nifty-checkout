import React from "react";
import { Helmet } from "react-helmet";

// Import styles
import "./styles.scss";

// Import data
const privacyData = require("./privacy.json");

const Privacy = () => (
  <>
    {/* Document title */}
    <Helmet title={"Finn · Privacy policy"} />

    <div className="route-wrapper">
      <div className="container">
        <div className="columns is-multiline is-centered is-mobile">
          <div className="column is-10">
            {/* Terms header */}
            <h1 className="title is-size-3 has-text-centered terms-title">
              Privacy policy
            </h1>

            {/* Terms list */}
            {privacyData.map(item => (
              <div key={item.id} className="terms-item">
                <h1 className="title is-size-4-mobile is-size-4-tablet is-size-4-desktop">
                  {item.title}
                </h1>
                <p className="is-size-5-desktop">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Privacy;
