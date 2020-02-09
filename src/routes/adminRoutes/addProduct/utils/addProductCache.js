// Import gql operations
import { PRODUCTS_FEED_QUERY, PRODUCTS_COUNT } from "components/graphql/query";

const addProductCache = ({ client, storeUsername, data }) => {
  try {
    /********** Update products feed **********/

    // Get products data from cache
    const { productsByStore } = client.readQuery({
      query: PRODUCTS_FEED_QUERY
    });

    // Update Products feed
    client.writeQuery({
      query: PRODUCTS_FEED_QUERY,
      data: {
        productsByStore: [data.createProduct, ...productsByStore]
      }
    });

    /********** Update products count **********/

    // Update products count
    client.writeQuery({
      query: PRODUCTS_COUNT,
      variables: {
        storeUsername
      },
      data: {
        productsByStoreCount: {
          count: [data.createProduct, ...productsByStore].length,
          __typename: "Count"
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default addProductCache;
