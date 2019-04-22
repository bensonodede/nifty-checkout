import React, { Component } from "react";

// Import higher order components
import { AuthUserContext } from "../session";

// Import components
import { SignInGoogle, SignInFacebook, SignInTwitter } from "../auth";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/Login.css";

class Login extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="App-container login__container">
            <div className="header">
              <h1 className="header__title">Sign in to get started.</h1>
            </div>

            <div>
              <p className="header__sub-title">
                We make things on the internet for humans. Give us your money.
                <span
                  className="header__sub-title"
                  role="img"
                  aria-label="Grinning with sweat"
                >
                  {" "}
                  😅
                </span>
              </p>
            </div>

            {/*  */}

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
