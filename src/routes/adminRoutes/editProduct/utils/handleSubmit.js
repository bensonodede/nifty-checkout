// Import functions
import formatProductValues from "./formatProductValues";

// Import graphql operations
import { PRODUCTS_BY_STORE_QUERY } from "components/graphql/query";

const handleSubmit = (
  values,
  actions,
  mutate,
  productId,
  history,
  storeUsername
) => {
  // Format values
  let formattedValues = formatProductValues(values);

  // Run update product mutation
  mutate({
    variables: {
      ...formattedValues,
      id: productId,
    },
    refetchQueries: [
      {
        query: PRODUCTS_BY_STORE_QUERY,
        variables: {
          storeUsername,
          first: 10,
          skip: 0,
          orderBy: "updatedAt_DESC",
        },
      },
    ],
    awaitRefetchQueries: true,
  }).then(() => {
    // Reset formik values after toast animation plays
    setTimeout(async () => {
      // Set form submitting state to false
      await actions.setSubmitting(false);

      // Remove persisted item
      await sessionStorage.removeItem(`edit-product-form-${productId}`);

      // Redirect to product page
      await history.push(`/${storeUsername}/admin/products`);
    }, 1200);
  });
};

export default handleSubmit;
