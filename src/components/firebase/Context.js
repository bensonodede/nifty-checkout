import React from "react";

// Provide a single Firebase instance to be used everywhere in the app
const FirebaseContext = React.createContext(null);

// Create Firebase Higher-order component for simplicity
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {/* Pass firebase props to component */}
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
