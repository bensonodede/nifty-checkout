import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

// Import components
import { Mixpanel } from "components/mixpanel";

// Import graphql operations
import { CREATE_PRODUCT } from "components/graphql/mutation";
import { PRODUCTS_FEED_QUERY } from "components/graphql/query";

const useAddProduct = () => {
  // Destructure hooks
  const [createProduct, { loading, error, data: mutationData }] = useMutation(
    CREATE_PRODUCT,
    {
      update(
        cache,
        {
          data: { createProduct }
        }
      ) {
        try {
          //! Implement infinite list first
          // Get data from cache
          const cacheData = cache.readQuery({
            query: PRODUCTS_FEED_QUERY,
            variables: {
              storeName: "xyzstore",
              first: 5,
              skip: 0,
              orderBy: "updatedAt_DESC"
            }
          });

          console.log(cacheData);

          // Update apollo cache after mutation
          cache.writeQuery({
            query: PRODUCTS_FEED_QUERY,
            data: {
              productsByStore: [createProduct, ...cacheData.productsByStore]
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  );

  if (loading) {
    console.log("Loading...");
  }

  if (error) {
    console.log(error);
  }

  if (mutationData) {
    console.log(mutationData);
  }
  //
  const addProduct = async (values, storeName) => {
    let { file, name, price } = values;

    // Remove commas from string and convert to float
    price = await parseFloat(price.replace(",", ""));

    console.log(file);
    console.log(name);
    console.log(price);
    console.log(storeName);
    createProduct({
      variables: {
        name,
        price,
        file,
        storeName
      }
    });
  };

  return [loading, addProduct];
};

export default useAddProduct;
