import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ProductItem from "../productItem";
import { useQuery } from "@apollo/react-hooks";
import InfiniteScroll from "react-infinite-scroller";

// Import Graphql query
import { PRODUCTS_FEED_QUERY } from "components/graphql/query";

// Import components
import { InfiniteList } from "components/list";
import { SimpleLoader, PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";

// Import styles
import "./styles.scss";

const ProductList = ({ match, history }) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [items, setItems] = useState([]);

  // Destructure route params
  let { storeName } = match.params;

  // Destructure hooks
  const { loading, error, data, fetchMore } = useQuery(PRODUCTS_FEED_QUERY, {
    variables: {
      storeName,
      first: 0,
      skip: 0,
      orderBy: "updatedAt_DESC"
    }
  });

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} />;
  }

  // Loader state
  if (loading) {
    return <PageLoader />;
  }

  // No. of products
  const productNum = data.productsByStore.length;

  const _loadNextPage = (...args) => {
    console.log("loadNextPage", ...args);

    //
    setIsNextPageLoading(true);

    fetchMore({
      variables: {
        storeName,
        first: 10,
        skip: items.length,
        orderBy: "updatedAt_DESC"
      },
      //
      updateQuery: (prev, { fetchMoreResult }) => {
        // If no more items return previously fetched
        if (!fetchMoreResult || fetchMoreResult.productsByStore.length === 0) {
          setHasNextPage(false);
          return prev;
        }

        setHasNextPage(true);
        setIsNextPageLoading(false);
        setItems([...items, ...fetchMoreResult.productsByStore]);
      }
    });
  };

  return (
    <>
      <InfiniteList
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
        data={items}
        loadNextPage={_loadNextPage}
        loader={<SimpleLoader />}
        listItem={<ProductItem />}
      />
    </>
  );

  // return (
  //   <div className="product-list">
  //     <div className="columns is-mobile is-multiline is-centered">
  //       {/*Product Header */}
  //       <div className="column is-10">
  //         <div className="columns is-mobile is-multiline ">
  //           <div className="column is-6 is-vcentered">
  //             <h1 className="title is-size-4 is-marginless">
  //               {productNum}{" "}
  //               {productNum === 1 ? (
  //                 <span>product</span>
  //               ) : (
  //                 <span>products</span>
  //               )}
  //             </h1>
  //           </div>

  //           <div className="column has-text-right">
  //             <button
  //               onClick={() => history.push(`/${storeName}/admin/add-product`)}
  //               className="button is-small is-primary is-outlined"
  //             >
  //               <span className="product-list__add-icon">
  //                 <Icon icon={ic_add} size={"100%"} />
  //               </span>
  //               Add new
  //             </button>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Product table */}
  //       <div className="column is-10">
  //         <table className="table is-fullwidth">
  //           <thead className="is-hidden-touch">
  //             <tr className="is-size-6">
  //               <td>Product</td>
  //               <td>Price</td>
  //               <td>Last modified</td>
  //               <td></td>
  //             </tr>
  //           </thead>

  //           {/* Product items */}
  //           <tbody>
  //             {data.productsByStore.map(item => (
  //               <ProductItem data={item} key={item.id} />
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //       {/* End product table */}
  //     </div>
  //   </div>
  // );
};

export default withRouter(ProductList);
