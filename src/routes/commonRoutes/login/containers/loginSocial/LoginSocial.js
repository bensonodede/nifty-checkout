import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { SignInGoogle, SignInFacebook, SignInTwitter } from "components/auth";

// Import styles
import "./styles.scss";

const LoginSocial = () => (
  <>
    {/* Document title */}
    <Helmet title={"Login - Finn"} />

    {/* Render login page */}
    <div className="route-wrapper">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          {/* Login logo */}
          <div className="column is-10-mobile is-10-tablet is-4-desktop">
            {/* Login title */}
            <h1 className="title has-text-centered is-size-5">finn.</h1>
            <h1 className="title has-text-centered is-size-3">
              Supercharge your online store.
            </h1>

            {/* Social auth components */}
            <div className="login-social__list">
              <SignInGoogle />
              <SignInFacebook />
              <SignInTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default LoginSocial;
