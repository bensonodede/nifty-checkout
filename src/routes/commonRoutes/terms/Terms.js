import React from "react";
import { Helmet } from "react-helmet";

// Import components
import HeroNavbar from "../heroNavbar";

// Import styles
import "./styles.scss";

// Import data
const termsData = require("./terms.json");

const Terms = () => (
  <>
    {/* Document title */}
    <Helmet title={"Finn · Terms and conditions"} />

    {/* Navbar */}
    <HeroNavbar />

    {/* Terms page */}
    <div className="route-wrapper-landing">
      <div className="container">
        <div className="columns is-multiline is-centered is-mobile">
          <div className="column is-10">
            {/* Terms header */}
            <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered terms-title">
              Terms and conditions
            </h1>

            {/* Terms list */}
            {termsData.map(item => (
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

export default Terms;
