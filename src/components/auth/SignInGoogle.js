import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

//  Import components
import { withFirebase } from "../firebase";
import Button from "components/button";

const SignInGoogleBase = ({ firebase }) => {
  const onSubmit = (event) => {
    firebase.doSignInWithGoogle();

    // Prevent reload
    event.preventDefault();
  };

  return (
    <form className="social" onSubmit={onSubmit}>
      {/* Social button */}
      <Button
        isOutline
        className="social__btn social__btn--google"
        type="submit"
      >
        {/* Social icon */}
        <span className="social__icon social__icon--google">
          <img
            src={require("../../images/google-icon.svg")}
            alt="google-logo"
          />
        </span>
        Continue with Google
      </Button>
    </form>
  );
};

// Pass Firebase and router props
const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);

export default SignInGoogle;
