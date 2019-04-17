import React, { Component } from "react";
import { withFirebase } from "../firebase";

class SignInGoogleBase extends Component {
  constructor() {
    super();

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
        // this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <button type="submit">Sign in with Google</button>
        </form>
      </div>
    );
  }
}

const SignInGoogle = withFirebase(SignInGoogleBase);

export default SignInGoogle;
