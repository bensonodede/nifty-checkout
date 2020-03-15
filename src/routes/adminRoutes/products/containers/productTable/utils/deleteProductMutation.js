import { useMutation } from "@apollo/react-hooks";

// Import graphql operations
import { DELETE_PRODUCT } from "components/graphql/mutation";

const deleteProductMutation = () => {
  // Destructure hooks
  const [mutate, { loading, error, data }] = useMutation(DELETE_PRODUCT);

  // Handle delete mutation
  const _deleteProductMutation = (id, imgUrl) => {
    mutate({
      variables: {
        id,
        imgUrl
      }
    });
  };

  return { loading, error, data, _deleteProductMutation };
};

export default deleteProductMutation;
