import React from "react";

// Import components
import Button from "components/button";

// Import styles
import "./styles.scss";

const SignUp = () => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-11-mobile is-7-tablet is-9-desktop">
            <div className="signup">
              <h5 className="is-size-6-mobile is-size-6-tablet is-size-5-desktop is-marginless has-text-centered has-text-white">
                Try finn now
              </h5>
              <h1 className="title is-size-3-mobile is-size-3-tablet is-size-2-desktop has-text-centered has-text-white is-marginless signup__title">
                Start selling in just 5 minutes
              </h1>
              <Button className="signup__button">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
