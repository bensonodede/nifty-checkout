import React from "react";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

// Import icons
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { twitter } from "react-icons-kit/icomoon/twitter";

const SignInTwitterBase = ({ firebase }) => {
  const onSubmit = event => {
    firebase.doSignInWithTwitter();

    // Prevent reload
    event.preventDefault();
  };

  return (
    <form className="social" onSubmit={onSubmit}>
      {/* Social button */}
      <Button
        className="social__btn social__btn--twitter has-text-white"
        type="submit"
      >
        {/* Social icon */}
        <div className="social__icon">
          <Icon icon={twitter} size={"100%"} />
        </div>
        Continue with Twitter
      </Button>
    </form>
  );
};

// Pass Firebase and router props
const SignInTwitter = compose(withRouter, withFirebase)(SignInTwitterBase);

export default SignInTwitter;
