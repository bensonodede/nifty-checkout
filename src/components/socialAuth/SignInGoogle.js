import React, { Component } from "react";
import { withFirebase } from "../firebase";

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
        // this.props.history.push(ROUTES.HOME);
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

const SignInGoogle = withFirebase(SignInGoogleBase);

export default SignInGoogle;
