import { useMutation } from "@apollo/react-hooks";

// Import graphql operations
import { UPDATE_PAYOUT } from "components/graphql/mutation";

const editPayoutMutation = () => {
  // Destructure mutation hooks
  const [
    mutate,
    { loading: mutationLoading, error: mutationError, data: mutationData }
  ] = useMutation(UPDATE_PAYOUT);

  const _editPayoutMutation = values => {
    // Run mutation to create product
    mutate({
      variables: values
    });
  };

  return { mutationLoading, mutationError, mutationData, _editPayoutMutation };
};

export default editPayoutMutation;
