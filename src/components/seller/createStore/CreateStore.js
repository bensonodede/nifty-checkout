// Import packages
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { Mutation } from "react-apollo";
import { Persist } from "formik-persist";
//
import { AuthUserContext } from "../../session";

//Import graphql mutations
import { CREATE_STORE } from "../../graphql";

// Import form page components
import PhoneNum from "./PhoneNum";
import StoreName from "./StoreName";

class CreateStore extends Component {
  // Prevent submission on enter press
  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

  // Handle form submission
  handleSubmit = async (values, actions, createStore, authUser) => {
    // Declare form values
    let { storeName, phoneNum } = values;

    // Remove empty spaces from phone number
    phoneNum = phoneNum.replace(/\D+/g, "");

    console.log(phoneNum);

    // Get current user UID
    let { uid } = authUser;

    // Set form submitting state to true
    await actions.setSubmitting(true);

    // Run mutation to create store
    await createStore({
      variables: {
        storeName,
        phoneNum,
        uid
      }
    });

    actions.resetForm({});

    // Set form submitting state to false
    await actions.setSubmitting(false);
  };

  // Handle data once mutation is complete
  handleComplete = data => {
    // Get store name from successful data write
    let { storeName } = data.createStore;

    //Redrirect to products page
    // this.props.history.push(`/${storeName}/products`);
  };

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Mutation
            mutation={CREATE_STORE}
            onCompleted={data => this.handleComplete(data)}
          >
            {(createStore, { loading, error }) => {
              /* Loading handler */
              {
                /* if (loading) {
                return <p>Loading...</p>;
              } */
              }

              /* Error handling */
              if (error) {
                return <p>Please try again</p>;
              }

              /* Render form */
              return (
                <Formik
                  initialValues={{ storeName: "", phoneNum: "" }}
                  validateOnChange={true}
                  validateOnBlur={true}
                  onSubmit={(values, actions) =>
                    this.handleSubmit(values, actions, createStore, authUser)
                  }
                >
                  {/*  */}
                  {FormikProps => (
                    <Form onKeyPress={this.onKeyPress}>
                      <Switch>
                        {/*  */}
                        <Redirect
                          from="/signup"
                          exact
                          to="/signup/store-name"
                        />

                        {/*  */}
                        <Route
                          path="/signup/store-name"
                          render={props => (
                            <StoreName {...FormikProps} {...props} />
                          )}
                        />

                        {/*  */}
                        <Route
                          path="/signup/phone-number"
                          render={props => (
                            <PhoneNum
                              {...FormikProps}
                              {...props}
                              loading={loading}
                            />
                          )}
                        />
                      </Switch>
                    </Form>
                  )}
                </Formik>
              );
            }}
          </Mutation>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default CreateStore;
