import React, { Component } from "react";

// Import higher order components
import { AuthUserContext } from "../session";

// Import components
import { SignInGoogle, SignInFacebook, SignInTwitter } from "../socialAuth";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/Login.css";

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

            <div className="login__list">
              <SignInGoogle />
              <SignInFacebook />
              <SignInTwitter />
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default Login;
