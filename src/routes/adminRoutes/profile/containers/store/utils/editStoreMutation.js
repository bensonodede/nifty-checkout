import { useMutation } from "@apollo/react-hooks";

// Import graphql operations
import { UPDATE_STORE_INFO } from "components/graphql/mutation";

const editStoreMutation = () => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(UPDATE_STORE_INFO);

  const _editStoreMutation = values => {
    // Run mutation to create product
    mutate({
      variables: values
    });
  };

  return { loading, error, data, _editStoreMutation };
};

export default editStoreMutation;
