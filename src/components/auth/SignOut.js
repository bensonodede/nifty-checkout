import React from "react";
import { withFirebase } from "../firebase";

const SignOutButton = ({ firebase, children }) => (
  <div onClick={firebase.doSignOut}>{children}</div>
);

export default withFirebase(SignOutButton);
