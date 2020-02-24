import React from "react";
import { Link } from "react-router-dom";
import Button from "components/button";

// Import components

const HeroBody = () => (
  <div className="hero-body is-paddingless">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10">
          {/* Hero title */}
          <h1 className="title is-size-2-mobile is-size-3-tablet is-size-2-desktop is-marginless has-text-centered has-text-black">
            Simple, beautiful online stores.
            <br />
          </h1>

          {/* Hero sub-title */}
          <p className="has-text-centered is-size-6 has-text-grey-darker">
            Give your customers a delightful shopping experience.
          </p>
        </div>

        {/* Sign up button */}
        <div className="column is-10 has-text-centered is-centered is-center">
          <Link to="/login">
            <Button>Get started</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBody;
