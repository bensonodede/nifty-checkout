import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { SignInGoogle, SignInFacebook, SignInTwitter } from "components/auth";

const LoginSocial = () => (
  <>
    {/* Document title */}
    <Helmet title={"Login - Finn"} />

    {/* Render login page */}
    <div className="login-social">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          {/* Login logo */}
          <div className="column is-10">
            <div className="logo__container">
              <img
                src={
                  "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382652/web_assets/finn_pink.png"
                }
                alt={"logo"}
                className="login__logo"
              />
            </div>
          </div>

          <div className="column is-10">
            {/* Login title */}
            <h1 className="title has-text-centered is-size-4">
              Let's get started
            </h1>
            <p className="has-text-centered has-text-grey-light">
              Create great online experiences for your customers.
            </p>
          </div>

          {/* Social auth components */}
          <div className="column is-10">
            <SignInGoogle />
            <SignInFacebook />
            <SignInTwitter />
          </div>
        </div>
      </div>
    </div>
  </>
);
export default LoginSocial;
