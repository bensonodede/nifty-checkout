import React, { Component } from "react";
import { Switch, Route, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Import form pages
import ImageForm from "./ImageForm";

// Define accepted image formats
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

// Validate image format
const ImageSchema = Yup.object().shape({
  file: Yup.mixed()
    .required("Please upload a photo of the item.")
    .test(
      "fileFormat",
      "Oops! That's not an image.",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
});

class ProductWizard extends Component {
  render() {
    return (
      <Formik initialValues={{ file: "" }} validationSchema={ImageSchema}>
        {props => (
          <Form>
            <Switch>
              <Redirect
                from="/:storeName/add-product"
                exact
                to="/:storeName/add-product/image"
              />
              <Route
                path="/:storeName/add-product/image"
                render={() => <ImageForm {...props} />}
              />
            </Switch>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ProductWizard;
