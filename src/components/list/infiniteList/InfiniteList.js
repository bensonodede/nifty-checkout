import React from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

// Import styles
import "./styles.scss";

const InfiniteList = ({
  hasNextPage,
  isNextPageLoading,
  data,
  loadNextPage,
  loader,
  listItem
}) => {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? data.length + 1 : data.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < data.length;

  // Render an item or a loading indicator.
  const Row = ({ index, style }) => {
    let content;
    // return (
    //   <>
    //     {isItemLoaded(index) ? (
    //       <>Loading...</>
    //     ) : (
    //       <div style={style}>{listItem}</div>
    //     )}
    //   </>
    // );

    if (!isItemLoaded(index)) {
      content = loader;
    } else {
      //   content = data[index].humanId;
      content = listItem;
    }

    return <div style={style}>{content data={data}}</div>;
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <div className="auto-sizer__container">
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                height={height}
                itemCount={itemCount}
                itemSize={30}
                onItemsRendered={onItemsRendered}
                ref={ref}
                width={width}
              >
                {Row}
              </FixedSizeList>
            )}
          </AutoSizer>
        </div>
      )}
    </InfiniteLoader>
  );
};

export default InfiniteList;
