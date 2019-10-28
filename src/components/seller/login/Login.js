// Import packages
import React, { Component } from "react";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";
import { Mixpanel } from "../../mixpanel";

// Import higher order components
import { withFirebase } from "../../firebase";

// Import GraphQL login query
import { LOGIN_QUERY } from "../../graphql/query";

// Import components
import { FadeInUp } from "../../animations";
import { Loader } from "../../loader";
import { Error } from "../../error";
import { AuthUserContext } from "../../session";
import { SignInGoogle, SignInFacebook, SignInTwitter } from "../../auth";

// Import styles
import "./styles.scss";

// Review page loader
const LoginLoader = () => (
  <div className="review__loader-container">
    <div className="review__loader">
      <Loader />
    </div>
  </div>
);

// Login component
class Login extends Component {
  constructor(props) {
    super(props);

    // Define component state
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    // Define redirect social sign in method
    let { doGetRedirectResult } = this.props.firebase;

    // Set loading state
    this.setState({ loading: true });

    // Get result once social sign in is completed
    doGetRedirectResult().then(result => {
      // Set loading state to false
      this.setState({
        loading: false
      });
    });
  }

  // Handle data once query runs
  handleComplete = async data => {
    // Get User store from data
    let { stores } = data.login;

    // Get history function from router props
    let { history } = this.props;

    // If user has a store redirect to store
    if (stores[0]) {
      let { storeName } = stores[0];

      // Track new login
      Mixpanel.track("Login");

      history.push(`/${storeName}/dashboard`);
    }

    // If User does NOT have a store, redirect to 'create-store page'
    else {
      // Track new sign up
      Mixpanel.track("Login without store");

      // Redirect to signup page
      history.push("/signup");
    }
  };

  render() {
    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Login - Finn</title>
        </Helmet>

        {/* Auth user */}
        <AuthUserContext.Consumer>
          {authUser => {
            /* Destructure uid and make it global */
            let uid;
            if (authUser) {
              uid = authUser.uid;

              /* Destructure login info */
              let { providerData, metadata } = authUser,
                { displayName, email, providerId } = providerData[0],
                { creationTime, lastSignInTime } = metadata;

              // Identify user in Mixpanel
              Mixpanel.identify(uid);

              // Set user profile in Mixpanel
              //? Reason: mixpanel does not accept formated syntax without quotations
              // prettier-ignore
              Mixpanel.people.set({
                "name": displayName,
                "$email": email,
                "$provider_ID": providerId,
                "$creation_time":creationTime,
                "$last_sign_in_time": lastSignInTime
              });
            }

            return (
              // Query component
              <Query
                // Graphql login query
                query={LOGIN_QUERY}
                // User ID from firebase social sign
                variables={{ uid }}
                // Run query if authUser is true
                skip={!authUser}
                // Handle data once query is completed
                onCompleted={data => this.handleComplete(data)}
              >
                {({ loading, error, data }) => {
                  /* Loading handler */
                  if (loading || this.state.loading) {
                    return <LoginLoader />;
                  }

                  /* Error handling */
                  if (error) {
                    console.log(error);
                    return <Error />;
                  }

                  /* Render login page */
                  return (
                    <FadeInUp>
                      <div className="login">
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
                                Create great online experiences for your
                                customers.
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
                    </FadeInUp>
                  );
                  /* End Render login page */
                }}
              </Query>
            );
          }}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

export default withFirebase(Login);
