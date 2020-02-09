import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import { useQuery } from "@apollo/react-hooks";

// Import components
import StoreFormFields from "./StoreFormFields";
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import { useModal } from "components/modal";
import ConfirmModal from "../confirmModal";
import WaitingModal from "../waitingModal";

// Import gql operations
import { STORE_QUERY } from "components/graphql/query";

const StoreForm = ({ match }) => {
  // Run store query
  const { loading, error, data } = useQuery(STORE_QUERY, {
    variables: { storeUsername: match.params.storeUsername }
  });

  // Instantiate confirm and waiting modal
  const [isOpen, toggleModal] = useModal(false);
  const [isWaitingOpen, toggleWaitingModal] = useModal(false);

  // query loading state
  if (loading) {
    return <PageLoader />;
  }

  // error loading state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  let {
    id,
    storeName,
    storeUsername,
    phoneNumber,
    policyReturns,
    policyDelivery
  } = data.store;

  return (
    <div className="column is-10-mobile is-6-tablet is-4-desktop">
      <Formik
        initialValues={{
          storeName,
          storeUsername,
          phoneNumber: phoneNumber.slice(3).replace(/(\d{3})(?=\d)/g, "$1 "),
          policyReturns,
          policyDelivery
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={values => {
          toggleModal();
        }}
      >
        {FormikProps => (
          <>
            <Form>
              <StoreFormFields {...FormikProps} />
            </Form>

            {/* Confirm details modal */}
            <ConfirmModal
              isOpen={isOpen}
              toggleModal={toggleModal}
              toggleWaitingModal={toggleWaitingModal}
              {...FormikProps}
            />

            {/* Waiting for store rebuilding modal  */}
            <WaitingModal isOpen={isWaitingOpen} id={id} {...FormikProps} />
          </>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(StoreForm);
