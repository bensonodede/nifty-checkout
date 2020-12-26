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
          <div className="column is-11-mobile is-8-tablet is-8-desktop">
            <div className="hero-body--column">
              {/* Hero title */}
              <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop is-marginless has-text-centered">
                Selling on instagram?
              </h1>

              {/* Hero sub-title */}
              <p className="has-text-centered has-text-grey-light is-size-6-mobile is-size-5-tablet is-size-5-desktop">
                Create a beautiful online store in 5 minutes. Let your customers
                buy your products without ever leaving instagram.
              </p>

              {/* Sign up button */}
              <Button
                onClick={() => history.push("/login")}
                className="hero-body__button"
                type={"button"}
              >
                Start selling
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBody;
