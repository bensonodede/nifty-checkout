import React, { Component } from "react";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

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
        <button
          className="button social__btn social__btn--google"
          type="submit"
        >
          {/* Social icon */}
          <span className="social__icon social__icon--google">
            <img
              src={require("../../images/google-icon.svg")}
              alt="google-logo"
            />
          </span>
          Continue with Google
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
