import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

// Import components
import { SuccessToast, ErrorToast } from "components/toast";
import ProductItem from "./productItem";
import ProductListDeleteContext from "./ProductListDeleteContext";

// Import graphql operations
import { DELETE_PRODUCT } from "components/graphql/mutation";

// Import functions
import { updateDeletedProductCache } from "./utils";

const ProductListTableBody = ({ data }) => {
  // Destructure route params
  let { storeUsername } = useParams();

  // Delete product mutation
  const [deleteMutation, deleteMutationProps] = useMutation(DELETE_PRODUCT, {
    // Update product cache
    update(cache, { data: { deleteProduct } }) {
      updateDeletedProductCache(cache, deleteProduct, storeUsername);
    },
  });

  // Destructure mutation props
  let { error: mutationError, data: mutationData } = deleteMutationProps;

  return (
    <tbody>
      {/* Products list */}
      <ProductListDeleteContext.Provider
        value={{ deleteMutation, deleteMutationProps }}
      >
        {data.productsByStore.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ProductListDeleteContext.Provider>

      {/* Success state */}
      {mutationData && <SuccessToast text={"Product deleted"} emoji={"✌"} />}

      {/* Error state */}
      {mutationError && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </tbody>
  );
};

export default ProductListTableBody;
