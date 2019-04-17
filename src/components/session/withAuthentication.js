import React from "react";

import AuthUserContext from "./Context";
import { withFirebase } from "../firebase";

// Create Higher order component for Auth state
const withAuthentication = Component => {
  class withAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      // Listening for auth state change i.e 'Signed In' or  'Signed out'
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        // If User is signed in, set authUser object to state
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    componentWillUnmount() {
      // Remove listener on unmount to prevent memory leaks
      this.listener();
    }

    render() {
      return (
        // Pass authUser props to component
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  // Pass firebase props
  return withFirebase(withAuthentication);
};

export default withAuthentication;
