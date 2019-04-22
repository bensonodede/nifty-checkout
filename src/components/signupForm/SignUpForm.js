import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { withFirebase } from "../firebase";
import { Mutation } from "react-apollo";

// Import form pages
import PhoneNum from "./PhoneNum";
import StoreName from "./StoreName";
import Confirmation from "./Confirmation";

class SignUpWizard extends Component {
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

  handleSubmit = (values, { setSubmitting, resetForm, setErrors }) => {
    // Define props
    const { history } = this.props;
    let { storeName } = this.props.match.params;

    try {
      //
      setSubmitting(true);
      this.setState(
        {
          submitted: true
        },
        () => {
          //
          console.log(values);
          setSubmitting(false);
          resetForm();
          //
          // history.push(`/${storeName}/products`);
        }
      );
    } catch (error) {
      //
      setErrors(error);
    }
  };

  render() {
    return (
      <div>
        {/* <Mutation
          // mutation={LOGIN_MUTATION}
          variables={{ phoneNum }}
          onCompleted={data => {
            console.log(data);
            this.props.firebase
              .dosignInWithCustomToken(data.login.token)
              .catch(error => console.log(error));
          }}
        > */}
        <Formik
          initialValues={{ storeName: "", phoneNum: "" }}
          // validationSchema={SignUpSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={this.handleSubmit}
        >
          {FormikProps => (
            <Form onKeyPress={this.onKeyPress}>
              <Switch>
                {/*  */}
                <Redirect from="/signup" exact to="/signup/store-name" />

                {/*  */}
                <Route
                  path="/signup/store-name"
                  render={props => <StoreName {...FormikProps} {...props} />}
                />

                {/*  */}
                <Route
                  path="/signup/phone-number"
                  render={props => <PhoneNum {...FormikProps} {...props} />}
                />

                {/*  */}
                <Route
                  path="/signup/confirmation"
                  render={props => <Confirmation {...FormikProps} {...props} />}
                />
              </Switch>
            </Form>
          )}
        </Formik>
        {/* </Mutation> */}
      </div>
    );
  }
}

const SignUpForm = withFirebase(SignUpWizard);

export default SignUpForm;
