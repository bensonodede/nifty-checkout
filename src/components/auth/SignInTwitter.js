import React, { Component } from "react";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

// Import icons
import { Icon } from "react-icons-kit";
import { twitter } from "react-icons-kit/icomoon/twitter";

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
        <button
          className="button social__btn social__btn--twitter"
          type="submit"
        >
          {/* Social icon */}
          <div className="social__icon social__icon--twitter">
            <Icon icon={twitter} size={"100%"} />
          </div>
          Continue with Twitter
        </button>
      </form>
    );
  }
}

// Pass Firebase and router props
const SignInTwitter = compose(
  withRouter,
  withFirebase
)(SignInTwitterBase);

export default SignInTwitter;
