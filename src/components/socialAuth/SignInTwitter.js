import React, { Component } from "react";
import { withFirebase } from "../firebase";

// Import styles
import "./styles.css";

class SignInTwitterBase extends Component {
  constructor() {
    super();

    // Errors from failed Twitter sign in go here
    this.state = {
      error: null
    };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithTwitter()
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
            src={require("../../images/twitter.svg")}
            alt="twitter-logo"
          />

          {/* Social label */}
          <p className="social__label">Sign in with Twitter</p>
        </button>
      </form>
    );
  }
}

const SignInTwitter = withFirebase(SignInTwitterBase);

export default SignInTwitter;
