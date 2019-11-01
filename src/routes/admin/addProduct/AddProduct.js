import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { Mutation } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";

// Import components
import { Mixpanel } from "components/mixpanel";
import { withAuthorization } from "components/session";

// Import form pages
import { ImageForm } from "./containers";
import DetailsForm from "./DetailsForm";

// Import graphql operation
import { CREATE_PRODUCT } from "components/graphql/mutation";
import { PRODUCTS_FEED_QUERY } from "components/graphql/query";

const AddProduct = ({ match }) => {
  // Destructure hooks
  const [createProduct, { data }] = useMutation(CREATE_PRODUCT, {
    update(
      cache,
      {
        data: { createProduct }
      }
    ) {
      // Get data from cache
      const data = cache.readQuery({
        query: PRODUCTS_FEED_QUERY
      });

      // Update apollo cache after mutation
      cache.writeQuery({
        query: PRODUCTS_FEED_QUERY,
        data: {
          productsByStore: [createProduct, ...data.productsByStore]
        }
      });
    }
  });

  // Prevent submission on enter press
  const onKeyPress = event => {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  };

  // Store name
  let { storeName } = match.params;

  // Handle form submission
  const handleSubmit = async (values, actions, authUser) => {
    let { file, name, price } = values;

    // Remove commas from string and convert to float
    price = await parseFloat(price.replace(",", ""));

    // Set form submitting state to true
    await actions.setSubmitting(true);

    // Run mutation to create store
    await createProduct({
      variables: {
        name,
        price,
        file,
        storeName
      }
    });

    // Set form submitting state to false
    await actions.setSubmitting(false);
  };

  return (
    <>
      {/* Formik form start */}
      <Formik
        initialValues={{ file: "", name: "", price: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
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
                    // loading={loading}
                    {...FormikProps}
                    {...props}
                  />
                )}
              />
            </Switch>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default withAuthorization(AddProduct);
