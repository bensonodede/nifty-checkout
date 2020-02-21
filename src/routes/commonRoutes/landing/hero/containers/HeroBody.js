import React from "react";
import { Link } from "react-router-dom";

// Import components
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/fa/chevronRight";

const HeroBody = () => (
  <div className="hero-body is-paddingless">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10">
          {/* Hero title */}
          <h1 className="title is-marginless hero--custom-title">
            Hi, this is finn.
          </h1>

          <br />

          {/* Hero sub-title */}
          <h1 className="title is-marginless has-text-grey-light hero--custom-title">
            It's a simple way to start and run an online store.{" "}
            {/* Sign up link */}
            <Link
              to={"/login"}
              className="title has-text-centered is-marginless hero--custom-title hero-signup"
            >
              Get started
              <span className="hero-signup__icons">
                <Icon icon={chevronRight} size={"100%"} />
                <Icon icon={chevronRight} size={"100%"} />
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBody;
