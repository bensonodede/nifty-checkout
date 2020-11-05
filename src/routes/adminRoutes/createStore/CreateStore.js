// Import packages
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { compose } from "recompose";
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/react-hooks";

// Import components
import { withAuthorization, AuthUserContext } from "components/session";
import { withFirebase } from "components/firebase";
import { useModal } from "components/modal";
import { ErrorToast, SuccessToast } from "components/toast";
import { CreateStoreModal } from "./containers";
import CreateStoreRoutes from "./CreateStoreRoutes";

// Import graphql operations
import { CREATE_STORE } from "components/graphql/mutation";

// Import styles
import "./styles.scss";
import { FormikPersist } from "components/form";

// Initial form values
const initialFormValues = require("./initialFormValues.json");

const CreateStore = ({ history }) => {
  // Destructure hooks
  const [isOpen, toggleModal] = useModal(false);
  const [mutate, { error, data }] = useMutation(CREATE_STORE);
  // Percentage loaded state
  const [percentageLoading, setPercentageLoading] = useState(0);

  // Close modal if error occurs
  useEffect(() => {
    if (error) {
      toggleModal();
    }
  }, [error]);

  // Redirect to admin page
  if (data) {
    setTimeout(() => {
      // Remove formik persist
      localStorage.removeItem("create-store-form");

      history.push(`/${data.createStore.storeUsername}/admin/products/page/1`);
    }, 2500);
  }

  // Progress loader function
  if (isOpen) {
    setTimeout(() => {
      if (percentageLoading < 95 && !error) {
        setPercentageLoading(percentageLoading + 1);
      }

      // Set loader to 100%
      if (data) {
        setPercentageLoading(100);
      }

      // If error, reset loader
      if (error) {
        setPercentageLoading(0);
      }
    }, 1200);
  }

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <>
          {/* Document title */}
          <Helmet title={`Finn · Create your store`} />

          <Formik
            initialValues={initialFormValues}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, actions) => {
              // Open loading modal
              toggleModal();

              // Get uid
              let { uid } = authUser;

              // Add uid to 'values' object and run create store mutation
              mutate({ variables: { ...values, ...{ uid } } });
            }}
          >
            {(FormikProps) => (
              <Form>
                <CreateStoreRoutes FormikProps={FormikProps} />

                {/* Persist values in local storage */}
                <FormikPersist name={"create-store-form"} />
              </Form>
            )}
          </Formik>

          {/* Loading modal */}
          <CreateStoreModal
            percentageLoading={percentageLoading}
            isOpen={isOpen}
          />

          {/* Error toast */}
          {error && <ErrorToast emoji={"💩"} text={"No internet connection"} />}

          {/* Success toast */}
          {data && (
            <SuccessToast emoji={"🎉"} text={"Success. Store created"} />
          )}
        </>
      )}
    </AuthUserContext.Consumer>
  );
};

export default compose(withFirebase, withAuthorization)(CreateStore);
