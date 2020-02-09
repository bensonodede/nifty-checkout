import React from "react";
import numeral from "numeral";
import { withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import { useQuery } from "@apollo/react-hooks";

// Import Graphql query
import { PRODUCT_QUERY } from "components/graphql/query";

// Import components
import { PageLoader } from "components/loader";
import { ErrorToast, SuccessToast } from "components/toast";
import EditProductFields from "./EditProductFields";

// Import functions
import { editProductMutation } from "../utils";

const EditProductForm = ({ match, history }) => {
  let { id, storeUsername } = match.params;

  // Query Products by store
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    fetchPolicy: "cache-and-network",
    variables: {
      id
    }
  });

  // Update product mutation
  const {
    mutationLoading,
    mutationError,
    mutationData,
    _editProductMutation
  } = editProductMutation();

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error || mutationError) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  // Success mutation state
  if (mutationData) {
    setTimeout(() => {
      history.push(`/${storeUsername}/admin/products`);
    }, 1900);
  }

  let { imgUrl, name, price, description } = data.product;

  // Format price
  price = numeral(price).format("'0,0'");

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{ file: imgUrl, name, price, description }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={values => {
          _editProductMutation({ ...values, imgUrl, id });
        }}
      >
        {FormikProps => (
          <Form>
            <EditProductFields {...FormikProps} loading={mutationLoading} />
          </Form>
        )}
      </Formik>

      {/* Success state */}
      {mutationData && <SuccessToast text={"Product updated"} emoji={"👍"} />}
    </>
  );
};

export default withRouter(EditProductForm);
