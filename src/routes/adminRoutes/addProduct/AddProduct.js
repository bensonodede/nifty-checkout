import React, { useEffect, useState } from "react";
import { compose } from "recompose";
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { FormikPersist } from "components/form";

// Import components
import AddProductRoutes from "./AddProductRoutes";
import AddProductContext from "./AddProductContext";
import { withAuthorization, withSubscription } from "components/session";
import { SuccessToast, ErrorToast } from "components/toast";

// Import graphql operations
import { CREATE_PRODUCT } from "components/graphql/mutation";

// Import functions
import {
  updateProductCache,
  createVariants,
  handleSubmit,
  handleReset,
} from "./utils";

// Import initial formik values
import initialValues from "./initialValues";

const AddProduct = ({ match, history }) => {
  // Waiting modal state
  const [showWaitToast, setShowWaitToast] = useState(false);

  // Destructure Store username
  let { storeUsername } = match.params;

  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(CREATE_PRODUCT, {
    // Update product cache
    update(cache, { data: { createProduct } }) {
      updateProductCache(cache, createProduct, storeUsername);
    },
  });

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={(values, actions) => {
          if (values.isFilesUploaded) {
            handleSubmit(values, actions, mutate, storeUsername, initialValues);
          } else {
            setShowWaitToast(true);
          }
        }}
        onReset={(values, actions) => {
          handleReset(values, actions, history, storeUsername);
        }}
      >
        {(FormikProps) => {
          /***** Create variants on option value change *****/
          useEffect(() => {
            // Destructure formik props
            let { setFieldValue, values } = FormikProps;

            // Create variants
            let variants = createVariants(values);

            // Set field value to variants
            setFieldValue("variants", variants);
          }, [FormikProps.values.options]);

          /* Render Form component */
          return (
            <Form>
              <AddProductContext.Provider value={{ loading }}>
                <AddProductRoutes FormikProps={FormikProps} />
              </AddProductContext.Provider>
              <FormikPersist
                name={"add-product-form"}
                isSessionStorage={false}
              />
            </Form>
          );
        }}
      </Formik>

      {/* Wait for images to upload */}
      {showWaitToast && (
        <ErrorToast
          text={"Wait for images to upload"}
          emoji={"🙏"}
          onClose={() => setShowWaitToast(false)}
        />
      )}

      {/* Success state */}
      {data && <SuccessToast text={"Product created"} emoji={"👍"} />}

      {/* Error state */}
      {error && <ErrorToast text={"No internet connection"} emoji={"💩"} />}
    </>
  );
};

export default compose(withAuthorization, withSubscription)(AddProduct);
