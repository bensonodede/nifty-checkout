import React, { Component } from "react";
import { Switch, Route, Redirect, Prompt, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";
import { Persist } from "formik-persist";
import * as Yup from "yup";

// import FormikPersist from "./FormikPersist";
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
    .required("Please fill in this field")

  // Product price validation schema
});

class ProductWizard extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false
    };
  }

  handleSubmit = () => {
    this.setState({ submitted: true }, () => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <Prompt
          when={!this.state.submitted}
          message={({ pathname }) => {
            return matchPath(pathname, { path: "/:storeName/add-product" })
              ? true
              : "Are you sure you want to navigate away?";
          }}
        />
        <Formik
          initialValues={{ file: "", title: "" }}
          validationSchema={ProductSchema}
          validateOnChange={false}
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

              {/*  */}
              <Persist name="AddProductForm" />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ProductWizard;
