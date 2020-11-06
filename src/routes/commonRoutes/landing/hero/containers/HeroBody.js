import React from "react";
import { useHistory } from "react-router-dom";
import Button from "components/button";

const HeroBody = () => {
  // Get history function
  let history = useHistory();

  return (
    <div className="hero-body hero-body--custom is-paddingless">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-11-mobile is-12-tablet is-10-desktop">
            <div className="hero-body--column">
              {/* Hero title */}
              <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop is-marginless has-text-centered">
                Everything you need to start selling online
                <br />
              </h1>

              {/* Hero sub-title */}
              <p className="has-text-centered has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop">
                Create a simple, beautiful store in 5 minutes.
              </p>

              {/* Sign up button */}
              <Button
                onClick={() => history.push("/login")}
                className="hero-body__button"
                type={"button"}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBody;
