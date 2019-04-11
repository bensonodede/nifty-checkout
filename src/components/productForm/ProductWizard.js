import React, { Component } from "react";
import { Switch, Route, Redirect, Prompt, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Import form pages
import ImageForm from "./ImageForm";
import DetailsForm from "./DetailsForm";

// Validate image format
const ProductSchema = Yup.object().shape({
  // Image validation schema
  file: Yup.mixed().required("Please upload a photo of the item."),

  // Product title validation schema
  title: Yup.string()
    .min(2, "That's too short.")
    .max(20, "That's too many characters(20 or less).")
    .required("Please fill in this field"),

  // Product price validation schema
  price: Yup.string()
    .min(2, "That's too short.")
    .required("Please fill in this field")
});

class ProductWizard extends Component {
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
          history.push(`/${storeName}/products`);
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
        <Prompt
          when={!this.state.submitted}
          message={({ pathname }) => {
            return matchPath(pathname, { path: "/:storeName/add-product" })
              ? true
              : "Are you sure you want to navigate away?";
          }}
        />
        {/*  */}
        <Formik
          initialValues={{ file: "", title: "", price: "" }}
          validationSchema={ProductSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={this.handleSubmit}
        >
          {FormikProps => (
            <Form>
              <Switch>
                {/*  */}
                <Redirect
                  from="/:storeName/add-product"
                  exact
                  to="/:storeName/add-product/image"
                />

                {/*  */}
                <Route
                  path="/:storeName/add-product/image"
                  render={props => <ImageForm {...FormikProps} {...props} />}
                />

                {/*  */}
                <Route
                  path="/:storeName/add-product/details"
                  render={props => <DetailsForm {...FormikProps} {...props} />}
                />
              </Switch>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ProductWizard;
