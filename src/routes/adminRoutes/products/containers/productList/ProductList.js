import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { CSSTransition } from "react-transition-group";

// Import components
import { PageLoader, ListLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import ProductListEmpty from "./ProductListEmpty";
import ProductListTableHeader from "./ProductListTableHeader";
import ProductListTableBody from "./ProductListTableBody";
import ProductListPagination from "./ProductListPagination";

// Import Graphql operations
import { PRODUCTS_BY_STORE_QUERY } from "components/graphql/query";

// Import styles
import "./styles.scss";

const ProductList = ({ match, countQuery }) => {
  // Items per page
  const ITEMS_PER_PAGE = 20;

  // Destructure route params
  let { storeUsername, pageNumber } = match.params;

  // Query for NUMBER of Products
  const {
    loading: countLoading,
    error: countError,
    data: countData,
  } = countQuery;

  // Skip items by number of items loaded in previous pages
  let skip = pageNumber ? (parseInt(pageNumber) - 1) * ITEMS_PER_PAGE : 0;

  // Query Products by store
  const { loading, error, data } = useQuery(PRODUCTS_BY_STORE_QUERY, {
    variables: {
      storeUsername,
      first: ITEMS_PER_PAGE,
      skip,
      orderBy: "updatedAt_DESC",
    },
    fetchPolicy: "cache-and-network",
  });

  // Error state
  if (error || countError) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  // Loading state
  if (loading || countLoading) {
    if (parseInt(pageNumber) === 1) {
      return <PageLoader />;
    } else {
      return <ListLoader />;
    }
  }

  // Get item count
  let { count } = countData.productsByStoreCount;

  // Divide total item number by items per page to get total number of pages
  // Round up result to nearest integer
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  if (data.productsByStore.length === 0 && parseInt(pageNumber) === 1) {
    return <ProductListEmpty />;
  }

  return (
    <>
      {data.productsByStore.length === 0 ? (
        /* Product list empty state */
        <p>There are no products on this page.</p>
      ) : (
        <CSSTransition
          in={true}
          appear={true}
          mountOnEnter={true}
          unmountOnExit={true}
          classNames={"fadeUp"}
          timeout={350}
        >
          <div className="product-list">
            {/* Product table list */}
            <table className="table is-fullwidth">
              {/* Desktop: Table header */}
              <ProductListTableHeader />

              {/* Table body */}
              <ProductListTableBody data={data} />
            </table>

            {/* Product pagination */}
            <ProductListPagination
              itemCount={count}
              itemSkipped={skip}
              itemShownCount={data.productsByStore.length}
              pageCount={pageCount}
              pageNumber={pageNumber}
              storeUsername={storeUsername}
            />
          </div>
        </CSSTransition>
      )}
    </>
  );
};

export default withRouter(ProductList);
