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
          <div className="column is-11-mobile is-12-tablet is-11-desktop">
            <div className="signup">
              {/* <p className="is-size-6-mobile is-marginless has-text-centered">
                Try Finn now
              </p> */}
              <h1 className="title has-text-centered is-size-2-desktop">
                Try finn now{" "}
                <span aria-label="folded hands emoji" role="img">
                  🙏
                </span>
              </h1>
              <Button>Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
