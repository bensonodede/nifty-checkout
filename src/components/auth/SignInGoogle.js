import React, { Component } from "react";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

// Import styles
import "./styles.css";

class SignInGoogleBase extends Component {
  constructor() {
    super();

    // Errors from failed Google sign in go here
    this.state = {
      error: null
    };
  }

  onSubmit = event => {
    this.props.firebase.doSignInWithGoogle();

    // Prevent reload
    event.preventDefault();
  };

  render() {
    return (
      <form className="social" onSubmit={this.onSubmit}>
        {/* Social button */}
        <button className="social__btn" type="submit">
          {/* Social icon */}
          <img
            className="social__icon"
            src={
              "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566399102/web_assets/google.svg"
            }
            alt="google-logo"
          />

          {/* Button label */}
          <p className="social__label">Continue with Google</p>
        </button>
      </form>
    );
  }
}

// Pass Firebase and router props
const SignInGoogle = compose(
  withRouter,
  withFirebase
)(SignInGoogleBase);

export default SignInGoogle;
