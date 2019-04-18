import React, { Component } from "react";

// Import higher order components
import { AuthUserContext } from "../session";

// Import components
import { SignInGoogle, SignInFacebook, SignInTwitter } from "../socialAuth";
import SignOut from "./SignOut";

class Login extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="App-container">
            <div className="header">
              <span
                className="header__title"
                role="img"
                aria-label="waving-hands"
              >
                👋🏾
              </span>
              <h1 className="header__title">Sign in</h1>
            </div>
            <SignInGoogle />
            <SignInFacebook />
            <SignInTwitter />
            <SignOut />
            {authUser ? (
              <div>
                <p> {authUser.displayName}</p>
                <p>{authUser.email}</p>
                <p>{authUser.uid}</p>
              </div>
            ) : (
              <p> SIGNED OUT</p>
            )}
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default Login;
