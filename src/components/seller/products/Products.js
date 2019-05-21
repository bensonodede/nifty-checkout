// Import packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";

// Import Graphql query
import { PRODUCTS_FEED_QUERY } from "../../graphql/query";

// Import components
import { Loader } from "../../loader";
import InfiniteScroll from "react-infinite-scroller";
import ProductCard from "./ProductCard";

import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/ikons/plus";

// Import styles
import "../../../styles/index.css";
import "./styles.css";

class Products extends Component {
  constructor(props) {
    super(props);

    //
    this.state = {
      hasMore: true
    };
  }

  //
  render() {
    let { storeName } = this.props.match.params;

    return (
      <div>
        {/*  */}
        <div className="App-container">
          {/* Product page header */}
          <div className="header header--product">
            <h1 className="header__title">Welcome.</h1>
            <p className="header__text">
              Keep track of all your products. Happy selling!
              <span role="img" aria-label="100">
                💯
              </span>
            </p>
          </div>

          {/* Products list */}
          <div className="product__list">
            {/* Add product */}
            <Link
              to={`/${storeName}/add-product`}
              style={{ textDecoration: "none" }}
            >
              <div className="product__add-item">
                <div>
                  {/*  */}
                  <div className="product__plus-icon">
                    <Icon
                      icon={plus}
                      size={"100%"}
                      style={{ color: "#d5d5d5" }}
                    />
                  </div>
                  <p className="product__add-item-text">Add new</p>
                </div>
              </div>
            </Link>
            <Query
              query={PRODUCTS_FEED_QUERY}
              variables={{
                storeName,
                first: 5,
                skip: 0,
                orderBy: "updatedAt_DESC"
              }}
            >
              {({ loading, error, data, fetchMore }) => {
                if (error) {
                  return <p>Oops. Please try again</p>;
                }

                if (loading) {
                  return <Loader />;
                }

                return (
                  <InfiniteScroll
                    pageStart={0}
                    initialLoad={true}
                    useWindow={true}
                    hasMore={this.state.hasMore}
                    loadMore={() => {
                      fetchMore({
                        variables: {
                          storeName,
                          first: 5,
                          skip: data.productsByStore.length,
                          orderBy: "updatedAt_DESC"
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                          if (
                            !fetchMoreResult ||
                            fetchMoreResult.productsByStore.length === 0
                          ) {
                            console.log("NO MORE");
                            this.setState({ hasMore: false });
                            return prev;
                          }

                          return Object.assign({}, prev, {
                            productsByStore: [
                              ...prev.productsByStore,
                              ...fetchMoreResult.productsByStore
                            ]
                          });
                        }
                      });
                    }}
                    loader={<Loader key={0} />}
                  >
                    {data.productsByStore.map(item => (
                      <Link
                        key={item.id}
                        to={{
                          pathname: `/${storeName}/products/options`,
                          state: { modal: true, item }
                        }}
                      >
                        <ProductCard {...item} storeName={storeName} />
                      </Link>
                    ))}
                  </InfiniteScroll>
                );
              }}
            </Query>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
