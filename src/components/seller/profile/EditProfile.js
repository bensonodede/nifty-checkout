import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Mutation } from "react-apollo";
import { Helmet } from "react-helmet";

// Import components
import { GenericInput } from "../../input";

// Import styles

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
            file: ""
            // name,
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
                <h1>Edit Profile</h1>

                {/********** Product name field **********/}
                <div>
                  <p className="product-form__label">PROFILE NAME</p>
                  <Field
                    name="name"
                    // validate={validateName}
                    render={({ field, form }) => (
                      <GenericInput {...field} {...form} />
                    )}
                  />
                </div>

                {/********** Product name field **********/}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default EditProfile;
