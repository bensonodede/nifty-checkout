import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
// import { Mutation } from "react-apollo";
import { Helmet } from "react-helmet";

// Import components
import { GenericMaskedInput, LabelInput } from "../../input";
import { validateName, validatePhoneNum } from "../../validation";

// Import styles
import "./styles.css";

// Number mask input definition
const phoneNumMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/
];

class EditProfile extends Component {
  render() {
    let { storeName } = this.props.match.params;

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Edit product - {storeName}</title>
        </Helmet>

        {/* Scroll to top of the page */}
        {/* <ScrollToTop /> */}

        <Formik
          initialValues={{
            storeName,
            phoneNum: "724645546"
            // price
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, actions) =>
            this.handleSubmit(
              values,
              actions
              // mutate
            )
          }
        >
          {({ setFieldValue, setFieldError, dirty, isValid }) => (
            <Form>
              <div className="App-container">
                {/* Page title */}
                <div className="header">
                  <h1 className="edit-profile__title">Edit Profile</h1>
                </div>

                {/********** Product store name field **********/}
                <div className="edit-profile__input-container">
                  <h3 className="product-form__label">Store name</h3>
                  <Field
                    name="storeName"
                    validate={validateName}
                    render={({ field, form }) => (
                      <GenericMaskedInput
                        placeholder={"xyzstore"}
                        mask={s => Array.from(s).map(() => /[A-Za-z0-9_]+/)}
                        {...field}
                        {...form}
                      />
                    )}
                  />
                </div>

                {/********** Product phone number field **********/}
                <div className="edit-profile__input-container">
                  <h3 className="product-form__label">Phone number</h3>
                  <Field
                    name="phoneNum"
                    validate={validatePhoneNum}
                    render={({ field, form }) => (
                      <LabelInput
                        {...field}
                        {...form}
                        label={"+254"}
                        mask={phoneNumMask}
                        placeholder={"712 345 678"}
                      />
                    )}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default EditProfile;
