import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Import form pages
import PhoneNum from "./PhoneNum";
import StoreName from "./StoreName";

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
              </Switch>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default SignUpWizard;
