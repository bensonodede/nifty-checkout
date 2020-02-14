const loadMoreOrders = param => {
  // Destructure params
  let { storeUsername, orderStatus, fetchMore, data, setHasMore } = param;

  // Run fetch more query
  fetchMore({
    variables: {
      storeUsername,
      orderStatus,
      first: 8,
      skip: data.ordersByStore.length,
      orderBy: "updatedAt_DESC"
    },

    // Update query data object
    updateQuery: (prev, { fetchMoreResult }) => {
      // Add new items to previously fetched array
      if (!fetchMoreResult || fetchMoreResult.ordersByStore.length === 0) {
        setHasMore(false);
        return prev;
      }

      // Create new object and concat new data
      return Object.assign({}, prev, {
        ordersByStore: [...prev.ordersByStore, ...fetchMoreResult.ordersByStore]
      });
    }
  });
};

export default loadMoreOrders;
