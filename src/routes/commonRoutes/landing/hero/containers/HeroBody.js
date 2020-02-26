import React from "react";
import { Link } from "react-router-dom";
import Button from "components/button";

// Import components

const HeroBody = () => (
  <div className="hero-body is-paddingless">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10">
          <div className="hero-body--column">
            {/* Hero title */}
            <h1 className="title is-size-2-mobile is-size-3-tablet is-size-1-desktop is-marginless has-text-centered">
              Simple, beautiful online stores.
              <br />
            </h1>

            {/* Hero sub-title */}
            <p className="has-text-centered is-size-5">
              Give your customers a delightful shopping experience.
            </p>

            {/* Sign up button */}
            <Link to="/login">
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBody;
