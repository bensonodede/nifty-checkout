import {
  PRODUCTS_BY_STORE_QUERY,
  PRODUCTS_COUNT,
} from "components/graphql/query";

const updateProductCache = (cache, createProduct, storeUsername) => {
  try {
    // Read cached products
    const { productsByStore } = cache.readQuery({
      query: PRODUCTS_BY_STORE_QUERY,
    });

    // Read cached products count
    const { productsByStoreCount } = cache.readQuery({
      query: PRODUCTS_COUNT,
      variables: {
        storeUsername,
      },
    });

    // Write to cached products
    cache.writeQuery({
      query: PRODUCTS_BY_STORE_QUERY,
      data: { productsByStore: [createProduct, ...productsByStore] },
    });

    // Write to cached products count
    cache.writeQuery({
      query: PRODUCTS_COUNT,
      variables: {
        storeUsername,
      },
      data: {
        productsByStoreCount: {
          count: productsByStoreCount.count + 1,
          __typename: "Count",
        },
      },
    });

    return;
  } catch (err) {
    return err;
  }
};

export default updateProductCache;
