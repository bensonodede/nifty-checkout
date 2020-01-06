import { useMutation } from "@apollo/react-hooks";

// Import graphql operations
import { UPDATE_ORDER } from "components/graphql/mutation";

const updateOrderMutation = () => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(UPDATE_ORDER);

  const _updateOrderMutation = async (id, orderStatus) => {
    // Run mutation to create product
    mutate({
      variables: {
        name,
        price,
        file,
        storeName
      }
    });
  };

  return { loading, error, data, _updateOrderMutation };
};

export default updateOrderMutation;
