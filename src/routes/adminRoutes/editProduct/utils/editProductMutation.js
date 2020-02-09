import { useMutation } from "@apollo/react-hooks";

// Import graphql operations
import { UPDATE_PRODUCT } from "components/graphql/mutation";

const editProductMutation = () => {
  // Destructure mutation hooks
  const [
    mutate,
    { loading: mutationLoading, error: mutationError, data: mutationData }
  ] = useMutation(UPDATE_PRODUCT);

  const _editProductMutation = async ({
    id,
    imgUrl,
    file,
    name,
    price,
    description
  }) => {
    // Remove commas from string and convert to float
    price = await parseFloat(price.replace(",", ""));

    // Run mutation to create product
    mutate({
      variables: {
        id,
        imgUrl,
        file,
        name,
        price,
        description
      }
    });
  };

  return { mutationLoading, mutationError, mutationData, _editProductMutation };
};

export default editProductMutation;
