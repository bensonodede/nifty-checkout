import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { Mutation } from "react-apollo";

// Import components
import { withAuthorization } from "../../session";

// Import form pages
import ImageForm from "./ImageForm";
import DetailsForm from "./DetailsForm";

// Import graphql operation
import { CREATE_PRODUCT } from "../../graphql/mutation";
import { PRODUCTS_FEED_QUERY } from "../../graphql/query";

class CreateProduct extends Component {
  // Prevent submission on enter press
  onKeyPress = event => {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  };

  handleSubmit = async (values, actions, mutate, authUser) => {
    let { file, name, price } = values;
    let { storeName } = this.props.match.params;

    // Remove commas from string and convert to float
    price = await parseFloat(price.replace(",", ""));

    // Set form submitting state to true
    await actions.setSubmitting(true);

    // Run mutation to create store
    await mutate({
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

  render() {
    let { storeName } = this.props.match.params;

    return (
      <Mutation
        mutation={CREATE_PRODUCT}
        onCompleted={data => {
          console.log(data);

          // Redirect to store product page
          this.props.history.push(`/${storeName}/products`);
        }}
        update={(cache, { data: { createProduct } }) => {
          //

          console.log(createProduct);
          let { __typename } = createProduct;

          try {
            // Get data from cache

            const data = cache.readQuery({
              query: PRODUCTS_FEED_QUERY,
              variables: {
                type: __typename
              }
            });

            console.log(data);

            // Update apollo cache after mutation
            cache.writeQuery({
              query: PRODUCTS_FEED_QUERY,
              variables: {
                type: __typename
              },
              data: {
                productsByStore: [createProduct, ...data.productsByStore]
              }
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(mutate, { loading, error }) => {
          /* Error handling */
          if (error) {
            console.log(error);
          }

          if (loading) {
            console.log("Loading...");
          }

          /* Render form */
          return (
            <div>
              {/* Formik form start */}
              <Formik
                initialValues={{ file: "", name: "", price: "" }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, actions) =>
                  this.handleSubmit(values, actions, mutate)
                }
              >
                {FormikProps => (
                  <Form>
                    <Switch>
                      {/* Product-form redirect */}
                      <Redirect
                        from="/:storeName/add-product"
                        exact
                        to="/:storeName/add-product/image"
                      />

                      {/* Product-form image route */}
                      <Route
                        path="/:storeName/add-product/image"
                        render={props => (
                          <ImageForm {...FormikProps} {...props} />
                        )}
                      />

                      {/* Product-form details route */}
                      <Route
                        path="/:storeName/add-product/details"
                        render={props => (
                          <DetailsForm
                            loading={loading}
                            {...FormikProps}
                            {...props}
                          />
                        )}
                      />
                    </Switch>
                  </Form>
                )}
              </Formik>
              {/* Formik form END */}
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default withAuthorization(CreateProduct);
