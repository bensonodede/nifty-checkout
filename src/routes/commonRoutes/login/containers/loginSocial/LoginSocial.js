import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

// Import components
import { SignInGoogle, SignInFacebook, SignInTwitter } from "components/auth";

// Import styles
import "./styles.scss";

const LoginSocial = () => {
  // Get history object
  let history = useHistory();

  return (
    <>
      {/* Document title */}
      <Helmet title={"Login · Finn"} />

      {/* Render login page */}
      <div className="route-wrapper-landing">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-8-tablet is-5-desktop">
              <div className="login-social">
                {/* Login logo */}
                <img
                  src={
                    "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1583742008/web_assets/finn-logo.png"
                  }
                  alt={"finn logo"}
                  className="login__logo"
                  onClick={() => history.push("/")}
                />

                {/* Login title */}
                <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-desktop has-text-centered">
                  Hey there, we've been expecting you.
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
      </div>
    </>
  );
};

export default LoginSocial;
