import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { withApollo } from "@apollo/react-hoc";
import { Mixpanel } from "components/mixpanel";

// Import pages
import { ImageForm, DetailsForm } from "./containers";

// Import functions
import addProductMutation from "./addProductMutation";
import addProductCache from "./addProductCache";

// Import components
import { SuccessToast, ErrorToast } from "components/toast";

const AddProduct = ({ match, history, client }) => {
  // Destructure mutation function
  const { loading, error, data, _addProductMutation } = addProductMutation();

  // Store name
  let { storeName } = match.params;

  // Success toast
  if (data) {
    // Handle mixpanel event
    Mixpanel.track("Created product");

    // Update cache
    addProductCache({ client, storeName, data });

    // Redirect after toast animation
    setTimeout(() => {
      history.push(`/${storeName}/admin/products`);
    }, 2000);
  }

  return (
    <>
      {/* Formik form  */}
      <Formik
        initialValues={{ file: "", name: "", price: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={values => _addProductMutation(values, storeName)}
      >
        {FormikProps => (
          <Form>
            <Switch>
              {/* Product-form redirect */}
              <Redirect
                from="/:storeName/admin/add-product"
                exact
                to="/:storeName/admin/add-product/image"
              />

              {/* Product-form image route */}
              <Route
                path="/:storeName/admin/add-product/image"
                render={props => <ImageForm {...FormikProps} {...props} />}
              />

              {/* Product-form details route */}
              <Route
                path="/:storeName/admin/add-product/details"
                render={props => (
                  <DetailsForm
                    {...FormikProps}
                    {...props}
                    loading={loading}
                    // error={error}
                  />
                )}
              />
            </Switch>
          </Form>
        )}
      </Formik>

      {/* On mutation complete */}
      {data && (
        <SuccessToast
          text={"Product created"}
          emoji={require("images/thumbs-up-sign_emoji.png")}
        />
      )}

      {/* Error state */}
      {error && <ErrorToast text={"No internet connection"} />}
    </>
  );
};

export default withApollo(AddProduct);
