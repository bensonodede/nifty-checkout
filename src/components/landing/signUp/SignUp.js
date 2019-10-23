import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

// Import styles
import "./styles.scss";

const SignUp = () => (
  <section className="signup">
    <div className="container">
      {/***** Start parent container *****/}
      <ScrollAnimation animateIn={"fadeInUp"} duration={1} delay={100}>
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-8-mobile is-8-tablet is-8-desktop signup__background">
            {/***** Start child container *****/}
            <div className="columns is-mobile is-multiline is-centered">
              <div className="container">
                {/* Sign up header column */}
                <div className="column">
                  <div className="content">
                    <p className="has-text-centered has-text-grey-light is-marginless">
                      Try Finn now
                    </p>
                    <h1 className="title is-size-4-mobile is-size-4-tablet has-text-centered ">
                      Start selling in just 5 minutes.
                    </h1>
                  </div>
                </div>
                {/* End sign up header column*/}

                {/* Sign up button column */}
                <div className="column is-narrow signup__btn-container">
                  <Link to="/login">
                    <button className="button has-background-primary is-medium">
                      <p className="is-marginless is-size-6 has-text-white">
                        Sign up
                      </p>
                    </button>
                  </Link>
                </div>
                {/* End Sign up button column */}
              </div>
            </div>
            {/***** End child container *****/}
          </div>
        </div>
      </ScrollAnimation>
      {/***** End parent container *****/}
    </div>
  </section>
);

export default SignUp;
