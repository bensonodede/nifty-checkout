import React from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

// Import styles
import "./styles.scss";

const InfiniteList = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  children
}) => {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < items.length;

  // Render an item or a loading indicator.
  const Row = ({ index, style }) => {
    let content;
    if (!isItemLoaded(index)) {
      content = "Loading...";
    } else {
      // console.log(items[index].humanId);
      content = items[index].humanId;
    }

    return (
      <div style={style}>
        {content} {index}
      </div>
    );
  };

  return (
    <>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <FixedSizeList
            className="List"
            height={500}
            itemCount={itemCount}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={250}
          >
            {Row}
          </FixedSizeList>
        )}
      </InfiniteLoader>
    </>
  );
};

export default InfiniteList;
