const loadMoreProducts = param => {
  // Destructure params
  let { storeName, fetchMore, data, setHasMore } = param;

  // Run fetch more query
  fetchMore({
    variables: {
      storeName,
      first: 8,
      skip: data.productsByStore.length,
      orderBy: "updatedAt_DESC"
    },

    // Update query data object
    updateQuery: (prev, { fetchMoreResult }) => {
      // Add new items to previously fetched array
      if (!fetchMoreResult || fetchMoreResult.productsByStore.length === 0) {
        setHasMore(false);
        return prev;
      }

      // Create new object and concat new data
      return Object.assign({}, prev, {
        productsByStore: [
          ...prev.productsByStore,
          ...fetchMoreResult.productsByStore
        ]
      });
    }
  });
};

export default loadMoreProducts;
