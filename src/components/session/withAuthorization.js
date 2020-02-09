import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

// Import components
import AuthUserContext from "./Context";
import { withFirebase } from "../firebase";

// Check if user is logged in
const condition = authUser => !!authUser;

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      // Firebase Auth state listener
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          // If User is not signed in, redirect to login page
          this.props.history.push("/login");
        }
      });
    }

    // Remove listener to prevent memory leaks
    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  // Provide firebase and react-2router props
  // Return withAuthorization HOC
  return compose(withRouter, withFirebase)(WithAuthorization);
};

export default withAuthorization;
