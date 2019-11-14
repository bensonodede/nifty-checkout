import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import InfiniteScroll from "react-infinite-scroller";

// Import Graphql query
import { PRODUCTS_FEED_QUERY } from "components/graphql/query";

// Import components
import { SimpleLoader } from "components/loader";
import { ErrorState } from "components/pageState";
import ProductItem from "../productItem";
import ProductListHeader from "../productListHeader";

// Import functions
import loadMoreProducts from "./loadMoreProducts";

// Import styles
import "./styles.scss";

const ProductList = ({ match }) => {
  // More items state
  const [hasMore, setHasMore] = useState(true);

  // Destructure route params
  let { storeName } = match.params;

  // Query Products by store
  const { loading, error, data, fetchMore } = useQuery(PRODUCTS_FEED_QUERY, {
    variables: {
      storeName,
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
    return <SimpleLoader />;
  }

  return (
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
          loader={<SimpleLoader key={0} />}
          loadMore={() =>
            loadMoreProducts({ storeName, fetchMore, data, setHasMore })
          }
        >
          <table className="table is-fullwidth">
            {/* Desktop: Table header */}
            <thead className="is-hidden-touch">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Last modified</th>
                <th></th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              {data.productsByStore.map(item => (
                <ProductItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </InfiniteScroll>
      </div>
      {/* End product list */}
    </div>
  );
};

export default withRouter(ProductList);
