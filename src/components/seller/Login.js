// Import packages
import React, { Component } from "react";
import { Query } from "react-apollo";

// Import higher order components
import { withFirebase } from "../firebase";

// Import GraphQL login query
import { LOGIN_QUERY } from "../graphql/query";

// Import components
import { SignInGoogle, SignInFacebook, SignInTwitter, SignOut } from "../auth";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    // Define state
    this.state = {
      loading: false,
      uid: "",
      skip: true
    };
  }

  componentDidMount() {
    // Define redirect social sign in method
    let { doGetRedirectResult } = this.props.firebase;

    // Set loading state
    this.setState({ loading: true });

    // Get result once social sign in is completed
    doGetRedirectResult().then(result => {
      // If sign in successfully returns user
      if (result.user) {
        // Get user id issued by firebase
        let { uid } = result.user;

        // Set user ID to state
        this.setState(
          {
            uid,

            // Allow client to run query by removing 'skip' condition
            skip: false
          },

          // Set loading state to false
          () => {
            this.setState({ loading: false });
          }
        );
      }

      // Set loading state to false
      this.setState({ loading: false });
    });
  }

  // Handle data once query runs
  handleComplete = data => {
    // Get User stores from data
    let { stores } = data.login;

    // Get history function from router props
    let { history } = this.props;

    //! If User has a store redirect to 'store homepage'
    if (stores[0]) {
      console.log("STORE EXISTS");
    }

    // If User does NOT have a store, redirect to 'create-store page'
    else {
      console.log("STORE DOES NOT EXIST");
      history.push("/signup");
    }
  };

  render() {
    // Define component state
    let { uid, skip } = this.state;

    return (
      // Query component
      <Query
        // Graphql login query
        query={LOGIN_QUERY}
        // User ID from firebase social sign
        variables={{ uid }}
        // To run query or not to run query
        skip={skip}
        // Handle data once query is completed
        onCompleted={data => this.handleComplete(data)}
      >
        {({ loading, error, data }) => {
          /* Loading handler */
          if (loading || this.state.loading) {
            return <p>loading...</p>;
          }

          /* Error handling */
          if (error) {
            console.log(error);
            return <p>Error: {error.message}</p>;
          }

          /* Render login page */
          return (
            <div className="App-container">
              {/* Login header */}
              <div className="header">
                {/* Login title */}
                <h1 className="header__title">Welcome.</h1>
                <p className="header__text">
                  We make things on the internet for humans. Give us your money.
                  <span
                    className="header__text"
                    role="img"
                    aria-label="Grinning with sweat"
                  >
                    {" "}
                    😅
                  </span>
                </p>
              </div>

              {/* Social auth components */}
              <div className="login__list">
                <SignInGoogle />
                <SignInFacebook />
                <SignInTwitter />
                <SignOut />
              </div>
            </div>
          );
          /* End Render login page */
        }}
      </Query>
    );
  }
}

export default withFirebase(Login);
