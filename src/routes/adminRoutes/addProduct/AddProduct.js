import React from "react";
import { compose } from "recompose";
import { Formik, Form } from "formik";
import { withApollo } from "@apollo/react-hoc";
import { Mixpanel } from "components/mixpanel";

// Import components
import { withAuthorization, withSubscription } from "components/session";
import { SuccessToast, ErrorToast } from "components/toast";
import AddProductContext from "./AddProductContext";
import AddProductRoutes from "./AddProductRoutes";

// Import functions
import { addProductMutation, addProductCache } from "./utils";

// Import styles
import "./styles.scss";

const AddProduct = ({ match, history, client }) => {
  // Destructure mutation function
  const { loading, error, data, _addProductMutation } = addProductMutation();

  // Store name
  let { storeUsername } = match.params;

  // Handle success state
  if (data) {
    // Handle mixpanel event
    Mixpanel.track("Created product");

    // Update cache
    addProductCache({ client, storeUsername, data });

    // Redirect after toast animation
    setTimeout(() => {
      history.push(`/${storeUsername}/admin/products`);
    }, 2000);
  }

  return (
    <>
      <Formik
        initialValues={{ file: "", name: "", price: "", description: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => _addProductMutation(values, storeUsername)}
      >
        {(FormikProps) => (
          <Form>
            <AddProductContext.Provider value={{ loading, error }}>
              <AddProductRoutes FormikProps={FormikProps} />
            </AddProductContext.Provider>
          </Form>
        )}
      </Formik>

      {/* Success state */}
      {data && <SuccessToast text={"Product created"} emoji={"👍"} />}

      {/* Error state */}
      {error && <ErrorToast text={"No internet connection"} emoji={"💩"} />}
    </>
  );
};

export default compose(
  withApollo,
  withAuthorization,
  withSubscription
)(AddProduct);
