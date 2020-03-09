// Import packages
import React, { useEffect } from "react";
import { compose } from "recompose";
import { Formik, Form } from "formik";
import { Persist } from "formik-persist";
import { useMutation } from "@apollo/react-hooks";

// Import components
import { withAuthorization, AuthUserContext } from "components/session";
import { withFirebase } from "components/firebase";
import { useModal } from "components/modal";
import { ErrorToast, SuccessToast } from "components/toast";
import { Mixpanel } from "components/mixpanel";
import { CreateStoreModal } from "./containers";
import CreateStoreRoutes from "./CreateStoreRoutes";

// Import graphql operations
import { CREATE_STORE } from "components/graphql/mutation";

// Import styles
import "./styles.scss";

// Initial form values
const initialFormValues = require("./initialFormValues.json");

const CreateStore = ({ firebase, history }) => {
  // Destructure hooks
  const [isOpen, toggleModal] = useModal(false);
  const [mutate, { error, data }] = useMutation(CREATE_STORE);

  // Close modal if error occurs
  useEffect(() => {
    if (error) {
      toggleModal();
    }
  }, [error]);

  // Redirect to admin page
  if (data) {
    // Handle mixpanel event
    Mixpanel.track("Created store");

    setTimeout(() => {
      history.push(`/${data.createStore.storeUsername}/admin`);
    }, 2500);
  }

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <>
          <Formik
            initialValues={initialFormValues}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, actions, e) => {
              console.log(values);
              console.log(e);
              // // Open loading modal
              // toggleModal();

              // // Get uid
              // let { uid } = authUser;

              // // Add uid to 'values' object and run create store mutation
              // mutate({ variables: { ...values, ...{ uid } } });

              // // Reset form values
              // actions.resetForm();
            }}
          >
            {FormikProps => (
              <Form>
                <CreateStoreRoutes FormikProps={FormikProps} />
                <Persist name="create-store-form" />
              </Form>
            )}
          </Formik>

          {/* Loading modal */}
          <CreateStoreModal isOpen={isOpen} />

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
