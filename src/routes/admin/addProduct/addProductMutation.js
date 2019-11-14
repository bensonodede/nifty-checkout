import { useMutation } from "@apollo/react-hooks";

// Import graphql operations
import { CREATE_PRODUCT } from "components/graphql/mutation";

const addProductMutation = () => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(CREATE_PRODUCT);

  const _addProductMutation = async (values, storeName) => {
    // Destructure form values
    let { file, name, price } = values;

    // Remove commas from string and convert to float
    price = await parseFloat(price.replace(",", ""));

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

  return { loading, error, data, _addProductMutation };
};

export default addProductMutation;
