import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/react-hooks";

// Import components
import { ErrorToast, SuccessToast } from "components/toast";
import DomainFormField from "./DomainFormField";
import DomainFormHeader from "./DomainFormHeader";
import DomainFormFooter from "./DomainFormFooter";

// Import gql operations
import { CREATE_DOMAIN } from "components/graphql/mutation";

// Import styles
import "./styles.scss";

const DomainForm = ({ match, history }) => {
  // Destructure storeUsername
  let { storeUsername } = match.params;

  // Add domain
  const [mutate, { loading, error, data }] = useMutation(CREATE_DOMAIN);

  return (
    <>
      {/* Header */}
      <DomainFormHeader />

      <Formik
        initialValues={{ domainName: "" }}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={({ domainName }) =>
          mutate({
            variables: {
              domainName,
              storeUsername,
            },
          })
        }
      >
        {(FormikProps) => (
          <>
            <Form>
              <DomainFormField {...FormikProps} />
              <DomainFormFooter {...FormikProps} isLoading={loading} />
            </Form>
          </>
        )}
      </Formik>

      {/* Success mutation */}
      {data && <SuccessToast text={"Domain added"} emoji={"👍"} />}

      {/* Error mutation */}
      {error && <ErrorToast text={"No internet connection"} emoji={"💩"} />}
    </>
  );
};

export default withRouter(DomainForm);
