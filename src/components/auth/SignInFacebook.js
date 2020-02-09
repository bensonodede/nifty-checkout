import React from "react";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

// Import icons
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/icomoon/facebook";

const SignInFacebookBase = ({ firebase }) => {
  const onSubmit = event => {
    firebase.doSignInWithFacebook();

    // Prevent reload
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="social">
      {/* Social buttnon */}
      <Button
        className="social__btn social__btn--facebook has-text-white"
        type="submit"
      >
        {/* Social icon */}
        <div className="social__icon">
          <Icon icon={facebook} size={"100%"} />
        </div>
        Continue with Facebook
      </Button>
    </form>
  );
};

// Pass Firebase and router props
const SignInFacebook = compose(withRouter, withFirebase)(SignInFacebookBase);

export default SignInFacebook;
