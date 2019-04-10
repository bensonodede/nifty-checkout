import React, { Component } from "react";
import { Switch, Route, Redirect, Prompt, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Import form pages
import PhoneNum from "./PhoneNum";
import StoreName from "./StoreName";

// Validate image format
const SignUpSchema = Yup.object().shape({
  //  Store name validation schema
  storeName: Yup.string()
  .required("Please fill in this field"),

  // Phone number validation schema
  phoneNum: Yup.string()
    .min(2, "That's too short.")
    .required("Please fill in this field")
});

class SignUpWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  handleSubmit = (values, { setSubmitting, resetForm, setErrors }) => {
    //
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
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        {/*  */}
        {/* <Prompt
          when={!this.state.submitted}
          message={({ pathname }) => {
            return matchPath(pathname, { path: "/signup/" })
              ? true
              : "Are you sure you want to navigate away?";
          }}
        /> */}
        {/*  */}
        <Formik
          initialValues={{ storeName: "" }}
          validationSchema={SignUpSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={this.handleSubmit}
        >
          {FormikProps => (
            <Form>
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
              </Switch>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default SignUpWizard;
