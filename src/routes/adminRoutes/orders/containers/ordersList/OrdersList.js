import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import { ListLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import OrdersItem from "../ordersItem";
import OrdersListPagination from "./OrdersListPagination";

// Import styles
import "./styles.scss";

// Import graphql operations
import { ORDERS_COUNT, ORDERS_BY_STORE_QUERY } from "components/graphql/query";

const OrdersList = ({ match, orderStatus }) => {
  // Items per page
  const ITEMS_PER_PAGE = 20;

  // Destructure route params
  let { storeUsername, pageNumber } = match.params;

  // Query for NUMBER of Orders
  const {
    loading: countLoading,
    error: countError,
    data: countData,
  } = useQuery(ORDERS_COUNT, {
    variables: { storeUsername, orderStatus },
    fetchPolicy: "cache-and-network",
  });

  // Skip items by number of items loaded in previous pages
  let skip = pageNumber ? (parseInt(pageNumber) - 1) * ITEMS_PER_PAGE : 0;

  // Orders query
  const { loading, error, data } = useQuery(ORDERS_BY_STORE_QUERY, {
    variables: {
      storeUsername,
      orderStatus,
      first: ITEMS_PER_PAGE,
      skip,
      orderBy: "createdAt_DESC",
    },
    fetchPolicy: "cache-and-network",
  });

  // Loading state
  if (countLoading || loading) {
    return <ListLoader />;
  }

  // Error state
  if (countError || error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  // Get item count
  let { count } = countData.ordersByStoreCount;

  // Divide total item number by items per page to get total number of pages
  // Round up result to nearest integer
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      classNames={"fadeUp"}
      timeout={300}
    >
      {data.ordersByStore.length === 0 ? (
        <p>There is nothing here yet.</p>
      ) : (
        <div className="orders-list">
          <table className="table is-fullwidth">
            {/* Desktop: Table header */}
            <thead className="is-hidden-touch">
              <tr>
                <th>Order</th>
                <th>Status</th>
                <th>Order placed</th>
                <th>Total</th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              {data.ordersByStore.map((item) => (
                <OrdersItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <OrdersListPagination
            itemCount={count}
            itemSkipped={skip}
            itemShownCount={data.ordersByStore.length}
            pageCount={pageCount}
            pageNumber={pageNumber}
            storeUsername={storeUsername}
            orderStatus={orderStatus}
          />
        </div>
      )}
    </CSSTransition>
  );
};

export default withRouter(OrdersList);
