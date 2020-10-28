import React, { useEffect, useState } from "react";
import { compose } from "recompose";
import { Formik, Form } from "formik";
import { useQuery, useMutation } from "@apollo/react-hooks";
import isEqual from "react-fast-compare";

// Import components
import EditProductRoutes from "./EditProductRoutes";
import EditProductContext from "./EditProductContext";
import { withAuthorization, withSubscription } from "components/session";
import { FormikPersist } from "components/form";
import { SuccessToast, ErrorToast } from "components/toast";
import { ErrorState } from "components/pageState";
import { PageLoader } from "components/loader";

// Import graphql operations
import { PRODUCT_QUERY } from "components/graphql/query";
import { UPDATE_PRODUCT } from "components/graphql/mutation";

// TODO: Update product on photo remove

// Import functions
// prettier-ignore
import { formatInitialValues, clearWindowStorage, createVariants, handleSubmit } from "./utils";

const EditProduct = ({ match, history }) => {
  // Waiting modal state
  const [showWaitToast, setShowWaitToast] = useState(false);

  // Destructure Store username
  let { storeUsername, productId } = match.params;

  // Destructure query hooks
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { id: productId },
  });

  // Destructure mutation hooks
  const [
    mutate,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(UPDATE_PRODUCT);

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error) {
    return <ErrorState />;
  }

  // Format initial values
  let initialValues = formatInitialValues(data.product);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => {
          if (values.isFilesUploaded) {
            // prettier-ignore
            handleSubmit(values, actions, mutate, productId, history, storeUsername);
          } else {
            setShowWaitToast(true);
          }
        }}
      >
        {(FormikProps) => {
          /* Create variants on option value change */
          useEffect(() => {
            // Destructure formik props
            let { setFieldValue, initialValues, values } = FormikProps;

            // If inital and value options are NOT equal...
            if (!isEqual(initialValues.options, values.options)) {
              // Create variants
              let variants = createVariants(values);

              // Set field value to variants
              setFieldValue("variants", variants);
            }
          }, [FormikProps.values.options]);

          /* Remove persisted item */
          useEffect(() => {
            // Listen for on window close
            window.addEventListener("beforeunload", (event) =>
              clearWindowStorage(event, data.product.id)
            );

            // Handle component unmount
            return () => {
              // Remove window listener
              window.removeEventListener("beforeunload", (event) =>
                clearWindowStorage(event, data.product.id)
              );

              // Remove persisted items from session
              sessionStorage.removeItem(`edit-product-form-${data.product.id}`);
              sessionStorage.removeItem(`edit-product-form-scroll-height`);
            };
          }, []);

          /* Render Form component */

          return (
            <Form>
              <EditProductContext.Provider value={{ mutationLoading }}>
                <EditProductRoutes FormikProps={FormikProps} />
              </EditProductContext.Provider>
              <FormikPersist
                name={`edit-product-form-${data.product.id}`}
                isSessionStorage={true}
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
      {mutationData && <SuccessToast text={"Product updated"} emoji={"👍"} />}

      {/* Error state */}
      {mutationError && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </>
  );
};

export default compose(withAuthorization, withSubscription)(EditProduct);
