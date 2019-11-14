// Import gql operations
import { PRODUCTS_FEED_QUERY, PRODUCTS_COUNT } from "components/graphql/query";

const deleteProductCache = ({ client, storeName, data }) => {
  try {
    /********** Update products feed **********/

    // Get products data from cache
    const { productsByStore } = client.readQuery({
      query: PRODUCTS_FEED_QUERY
    });

    // Remove deleted product from array of cached products
    const productsArr = productsByStore.filter(
      product => product.id !== data.deleteProduct.id
    );

    // Update Products feed
    client.writeQuery({
      query: PRODUCTS_FEED_QUERY,
      data: {
        productsByStore: productsArr
      }
    });

    /********** Update products count **********/

    // Update products count
    client.writeQuery({
      query: PRODUCTS_COUNT,
      variables: {
        storeName
      },
      data: {
        productsByStoreCount: {
          count: productsArr.length,
          __typename: "Count"
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default deleteProductCache;
