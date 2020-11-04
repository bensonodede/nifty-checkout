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
          <div className="column is-12-mobile is-11-tablet is-9-desktop">
            <div className="signup-section">
              {/* Signup Emoji */}
              <h1 className="title is-size-3-mobile is-size-3-tablet is-size-2-desktop has-text-centered is-marginless signup-section__emoji">
                <span aria-label="hands raised emoji" role="img">
                  🙌{" "}
                </span>
              </h1>

              {/* Signup Title */}
              <div className="signup-section__title">
                <h1 className="title is-size-3-mobile is-size-3-tablet is-size-2-desktop has-text-centered has-text-white is-marginless">
                  It's easy to get started
                </h1>
                <p className="has-text-white has-text-centered">
                  And it's free. Two things everyone loves.
                </p>
              </div>

              {/* Signup Button */}
              <Link to={"/login"}>
                <Button className="signup-section__button">Try for free</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
