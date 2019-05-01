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
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    };
  }

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

    // Set form submitting state to false
    await actions.setSubmitting(false);

    // Reset form
    await actions.resetForm({});

    // Workaround to clear formik persist
    await actions.resetForm({});

    // Redirect to store product page
    this.props.history.push(`/${storeName}/products`);
  };

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Mutation mutation={CREATE_STORE}>
            {(createStore, { loading, error }) => {
              {
                /* Add loading handler */
              }
              /* Error handling */
              if (error) {
                console.log(error);
              }

              /* Render form */
              return (
                <div>
                  <Formik
                    initialValues={{ storeName: "", phoneNum: "" }}
                    validateOnChange={true}
                    validateOnBlur={true}
                    onSubmit={(values, actions) =>
                      this.handleSubmit(values, actions, createStore, authUser)
                    }
                  >
                    {/* Formik form */}
                    {FormikProps => (
                      <Form onKeyPress={this.onKeyPress}>
                        {/* Declare routes */}
                        <Switch>
                          {/* Redirect to store-name sign up */}
                          <Redirect
                            from="/signup"
                            exact
                            to="/signup/store-name"
                          />

                          {/* Store name sign up route */}
                          <Route
                            path="/signup/store-name"
                            render={props => (
                              <StoreName {...FormikProps} {...props} />
                            )}
                          />

                          {/* Phone number route */}
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

                        {/* Persist form values */}
                        <Persist name="signup-form" />
                      </Form>
                    )}
                  </Formik>
                </div>
              );
            }}
          </Mutation>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default CreateStore;
