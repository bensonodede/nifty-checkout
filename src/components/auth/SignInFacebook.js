import React, { Component } from "react";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

// Import icons
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/icomoon/facebook";

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
    this.props.firebase.doSignInWithFacebook();

    // Prevent reload
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {/* Social buttnon */}
        <button className="social__btn social__btn--facebook" type="submit">
          {/* Social icon */}
          <div className="social__icon">
            <Icon icon={facebook} size={"100%"} />
          </div>

          {/* Social label */}
          <p className="social__label">Continue with Facebook</p>
        </button>
      </form>
    );
  }
}

// Pass Firebase and router props
const SignInFacebook = compose(
  withRouter,
  withFirebase
)(SignInFacebookBase);

export default SignInFacebook;
