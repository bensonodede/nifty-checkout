import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import { useQuery } from "@apollo/react-hooks";

// Import components
import { Loader } from "components/loader";
import { ErrorToast, SuccessToast } from "components/toast";
import PayoutFormFields from "./PayoutFormFields";

// Import gql operations
import { STORE_QUERY } from "components/graphql/query";

// Import functions
import editPayoutMutation from "../../utils";

const PayoutForm = ({ match, history }) => {
  // Destructure storeUsername
  let { storeUsername } = match.params;

  // Run store query
  let { loading, error, data } = useQuery(STORE_QUERY, {
    variables: { storeUsername: match.params.storeUsername }
  });

  let {
    mutationLoading,
    mutationError,
    mutationData,
    _editPayoutMutation
  } = editPayoutMutation();

  // Loading state
  if (loading) {
    return <Loader />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  let { id, payoutMethod, payoutNumber } = data.store;

  // Remove country code and add whitespaces after every 3 characters
  if (payoutMethod === "phoneNumber") {
    payoutNumber = payoutNumber.slice(3).replace(/(\d{3})(?=\d)/g, "$1 ");
  }

  // Add whitespace after every 3 characters
  if (payoutMethod === "tillNumber") {
    payoutNumber = payoutNumber.replace(/(\d{3})(?=\d)/g, "$1 ");
  }

  // Redirect after successful mutation
  if (mutationData) {
    setTimeout(() => {
      history.push(`/${storeUsername}/admin/profile`);
    }, 1900);
  }

  return (
    <>
      <Formik
        initialValues={{
          payoutMethod,
          payoutNumber
        }}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={values => _editPayoutMutation({ ...values, ...{ id } })}
      >
        {FormikProps => (
          <>
            <Form>
              <PayoutFormFields
                {...FormikProps}
                mutationLoading={mutationLoading}
              />
            </Form>
          </>
        )}
      </Formik>

      {/* Success mutation */}
      {mutationData && (
        <SuccessToast text={"Payout info updated"} emoji={"👌"} />
      )}

      {/* Error mutation */}
      {mutationError && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </>
  );
};

export default withRouter(PayoutForm);
