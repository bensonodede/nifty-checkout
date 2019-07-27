// Import packages
import React, { Component } from "react";
import { Query } from "react-apollo";

// Import higher order components
import { withFirebase } from "../firebase";

// Import GraphQL login query
import { LOGIN_QUERY } from "../graphql/query";

// Import components
import { Loader } from "../loader";
import { AuthUserContext } from "../session";
import { SignInGoogle, SignInFacebook, SignInTwitter } from "../auth";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/Login.css";

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
  handleComplete = data => {
    // Get User stores from data
    let { stores } = data.login;

    // Get history function from router props
    let { history } = this.props;

    // If user has a store redirect to store
    if (stores[0]) {
      let { storeName } = stores[0];

      history.push(`/${storeName}/products`);
    }

    // If User does NOT have a store, redirect to 'create-store page'
    else {
      history.push("/signup");
    }
  };

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => {
          /* Destructure uid and make it global */
          let uid;
          if (authUser) {
            uid = authUser.uid;
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
                  return <p>Error: {error.message}</p>;
                }

                /* Render login page */
                return (
                  <div className="App-container">
                    {/* Login logo */}
                    <div className="login__logo-container">
                      <img
                        src={require("../../images/isle99_pink.png")}
                        alt={"logo"}
                        className="login__logo"
                      />
                    </div>
                    {/* Login header */}
                    <div className="login__header">
                      {/* Login title */}
                      <h1 className="login__title">Let's get started</h1>
                      <p className="login__sub-title">
                        Create great online experiences for your customers.
                      </p>
                    </div>

                    {/* Social auth components */}
                    <div className="login__list">
                      <SignInGoogle />
                      <SignInFacebook />
                      <SignInTwitter />
                    </div>
                  </div>
                );
                /* End Render login page */
              }}
            </Query>
          );
        }}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Login);
