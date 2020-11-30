import React from "react";
import { Formik, Form } from "formik";

// Import components
import DomainAddFormField from "./DomainAddFormField";
import DomainAddFormFooter from "./DomainAddFormFooter";

const DomainAddForm = ({ mutate, loading, storeUsername }) => (
  <Formik
    initialValues={{ domainName: "" }}
    validateOnBlur={false}
    validateOnMount={false}
    onSubmit={({ domainName }) =>
      // Create domain mutation
      mutate({
        variables: {
          domainName,
          storeUsername,
        },
      }).catch((error) => console.warn(error))
    }
  >
    {(FormikProps) => (
      <Form>
        <DomainAddFormField {...FormikProps} />
        <DomainAddFormFooter {...FormikProps} isLoading={loading} />
      </Form>
    )}
  </Formik>
);

export default DomainAddForm;
