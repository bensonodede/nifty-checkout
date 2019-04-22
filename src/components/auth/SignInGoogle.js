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
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        console.log(socialAuthUser);

        this.setState({ error: null });

        // Redirect to home page
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });

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
            src={require("../../images/google.svg")}
            alt="google-logo"
          />

          {/* Button label */}
          <p className="social__label">Sign in with Google</p>
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
