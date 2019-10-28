import React, { Component } from "react";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

// Import icons
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/icomoon/facebook";

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
      <form onSubmit={this.onSubmit} className="social">
        {/* Social buttnon */}
        <button
          className="button social__btn social__btn--facebook has-text-white"
          type="submit"
        >
          {/* Social icon */}
          <div className="social__icon">
            <Icon icon={facebook} size={"100%"} />
          </div>
          Continue with Facebook
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
