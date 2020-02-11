import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

// Import components
import { ListLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import OrdersItem from "../ordersItem";

// Import styles
import "./styles.scss";

// Import graphql operations
import { ORDERS_FEED_QUERY } from "components/graphql/query";

// Import functions
import loadMoreOrders from "./loadMoreOrders";

const OrdersList = ({ match, orderStatus }) => {
  // More items state
  const [hasMore, setHasMore] = useState(true);

  // Destructure route params
  let { storeName } = match.params;

  const { loading, error, data, fetchMore } = useQuery(ORDERS_FEED_QUERY, {
    variables: {
      storeName,
      orderStatus,
      first: 8,
      skip: 0,
      orderBy: "updatedAt_DESC"
    },
    fetchPolicy: "network-only"
  });

  // Loading state
  if (loading) {
    return <ListLoader />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  return (
    <div className="orders-list">
      <InfiniteScroll
        pageStart={0}
        initialLoad={true}
        useWindow={true}
        hasMore={hasMore}
        loader={<ListLoader key={0} />}
        loadMore={() =>
          loadMoreOrders({
            storeName,
            orderStatus,
            fetchMore,
            data,
            setHasMore
          })
        }
      >
        <table className="table is-fullwidth">
          {/* Desktop: Table header */}
          <thead className="is-hidden-touch">
            <tr>
              <th>Order</th>
              <th>Status</th>
              <th>Order placed</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {data.ordersByStore.map(item => (
              <OrdersItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

export default withRouter(OrdersList);
