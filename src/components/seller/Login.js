import React, { Component } from "react";

// Import higher order components
import { AuthUserContext } from "../session";

// Import components
import { SignInGoogle } from "../socialAuth";
import SignOut from "./SignOut";

class Login extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <h1>LOGIN HERE</h1>
            <SignInGoogle />
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
