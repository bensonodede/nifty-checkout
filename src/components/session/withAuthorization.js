import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

// Import components
import { withFirebase } from "../firebase";

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      // Firebase Auth state listener
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        // If User is not signed in, redirect to login page
        if (!authUser) {
          this.props.history.push("/login");
        }
      });
    }
    componentWillUnmount() {
      // Remove listener to prevent memory leaks
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  // Provide firebase and react-2router props
  // Return withAuthorization HOC
  return compose(
    withRouter,
    withFirebase
  )(WithAuthorization);
};

export default withAuthorization;
