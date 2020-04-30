import { useMutation } from "@apollo/react-hooks";

// Import graphql operations
import { UPDATE_STORE_PAYOUT_INFO } from "components/graphql/mutation";

const editPayoutMutation = () => {
  // Destructure mutation hooks
  const [
    mutate,
    { loading: mutationLoading, error: mutationError, data: mutationData }
  ] = useMutation(UPDATE_STORE_PAYOUT_INFO);

  const _editPayoutMutation = values => {
    // Run mutation to create product
    mutate({
      variables: values
    });
  };

  return { mutationLoading, mutationError, mutationData, _editPayoutMutation };
};

export default editPayoutMutation;
