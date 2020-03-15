import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import InfiniteScroll from "react-infinite-scroller";

// Import Graphql query
import { PRODUCTS_FEED_QUERY } from "components/graphql/query";

// Import components
import { PageLoader, ListLoader } from "components/loader";
import { ErrorState } from "components/pageState";
import ProductListEmpty from "../productListEmpty";
import ProductListHeader from "../productListHeader";
import ProductTable from "../productTable";

// Import functions
import loadMoreProducts from "./loadMoreProducts";

// Import styles
import "./styles.scss";

const ProductList = ({ match }) => {
  // More items state
  const [hasMore, setHasMore] = useState(true);

  // Destructure route params
  let { storeUsername } = match.params;

  // Query Products by store
  const { loading, error, data, fetchMore } = useQuery(PRODUCTS_FEED_QUERY, {
    variables: {
      storeUsername,
      first: 8,
      skip: 0,
      orderBy: "updatedAt_DESC"
    }
  });

  // Error state
  if (error) {
    return <ErrorState />;
  }

  // Loading state
  if (loading) {
    return <PageLoader text={"We're fetching your products."} />;
  }

  return (
    <>
      {data.productsByStore.length === 0 ? (
        <ProductListEmpty />
      ) : (
        <div className="columns is-multiline is-mobile is-centered">
          {/* Product list header */}
          <div className="column is-10">
            <ProductListHeader />
          </div>

          {/* Product list */}
          <div className="column is-10">
            <InfiniteScroll
              pageStart={0}
              initialLoad={true}
              useWindow={true}
              hasMore={hasMore}
              loader={<ListLoader key={0} />}
              loadMore={() =>
                loadMoreProducts({ storeUsername, fetchMore, data, setHasMore })
              }
            >
              <ProductTable data={data} />
            </InfiniteScroll>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(ProductList);
