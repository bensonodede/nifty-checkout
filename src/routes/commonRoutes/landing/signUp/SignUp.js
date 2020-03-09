import React from "react";
import { Link } from "react-router-dom";

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
            <div className="signup-section">
              {/* Signup Emoji */}
              <h1 className="title is-size-3-mobile is-size-3-tablet is-size-2-desktop has-text-centered is-marginless signup-section__emoji">
                <span aria-label="hands raised emoji" role="img">
                  🙌
                </span>{" "}
              </h1>

              {/* Signup Title */}
              <h1 className="title is-size-3-mobile is-size-3-tablet is-size-2-desktop has-text-centered has-text-white is-marginless signup-section__title">
                Start selling in just 5 minutes
              </h1>

              {/* Signup Button */}
              <Link to={"/login"}>
                <Button className="signup-section__button">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
