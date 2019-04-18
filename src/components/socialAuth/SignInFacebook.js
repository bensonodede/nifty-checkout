import React, { Component } from "react";
import { withFirebase } from "../firebase";

// Import styles
import "./styles.css";

class SignInFacebookBase extends Component {
  constructor() {
    super();

    // Errors from failed Facebook sign in go here
    this.state = {
      error: null
    };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
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
      <form onSubmit={this.onSubmit}>
        {/* Social buttnon */}
        <button className="social__btn" type="submit">
          {/* Social icon */}
          <img
            className="social__icon"
            src={require("../../images/facebook.svg")}
            alt="facebook-logo"
          />

          {/* Social label */}
          <p className="social__label">Sign in with Facebook</p>
        </button>
      </form>
    );
  }
}

const SignInFacebook = withFirebase(SignInFacebookBase);

export default SignInFacebook;
