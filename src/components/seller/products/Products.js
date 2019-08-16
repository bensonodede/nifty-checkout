// Import packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";

// Import Graphql query
import { PRODUCTS_FEED_QUERY } from "../../graphql/query";

// Import components
import { Loader } from "../../loader";
import { Error } from "../../error";
import InfiniteScroll from "react-infinite-scroller";
import ProductCard from "./ProductCard";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/ikons/plus";

// Import styles
import "../../../styles/index.css";
import "./styles.css";

// Product loader component
const ProductLoader = () => (
  <div className="product__loader-container">
    <div className="product__loader">
      <Loader key={0} />
    </div>
  </div>
);

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true
    };
  }

  render() {
    // Destructure route params
    let { storeName } = this.props.match.params;

    return (
      <div>
        <div className="App-container product">
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
             // Error state
              if (error) {
                return <Error />;
              }

              // Loading state

              if (loading) {
                return <ProductLoader />;
              }

              return (
                /********** Render products **********/
                <div>
                  {data.productsByStore[0] ? (
                    <div>
                      {/********** Products header **********/}

                      <div className="header header--product">
                        <h1 className="header__title">Welcome</h1>
                        <p className="header__text">
                          Keep track of and manage all your products. Happy
                          selling!
                          <span
                            role="img"
                            aria-label="100"
                            className="dashboard__emoji"
                          >
                            💯
                          </span>
                        </p>
                      </div>

                      {/********** Products header end **********/}

                      {/********** Products page list **********/}

                      <div className="product__list">
                        {/* Add product */}
                        <Link
                          to={`/${storeName}/add-product`}
                          style={{ textDecoration: "none" }}
                        >
                          <div className="product__add-item">
                            <div>
                              {/* Add product plus icon */}
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

                        {/* Infinite scroll list */}

                        <InfiniteScroll
                          pageStart={0}
                          initialLoad={true}
                          useWindow={false}
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
                          loader={<ProductLoader key={0} />}
                        >
                          {/* Render all products */}
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
                      </div>

                      {/********** Products page list end **********/}
                    </div>
                  ) : (
                    /********** Empty state **********/

                    <div className="product__empty">
                      {/* Empty state image */}
                      <div className="product__empty-img-container">
                        <img
                          className="product__empty-img"
                          alt={"no_internet"}
                          src={require("../../../images/pablo-no-comments.png")}
                        />
                      </div>

                      <h1 className="product__empty-title">No products yet.</h1>
                      <p className="product__empty-text">
                        Click the button below to add your first product.
                      </p>
                      <Link
                        to={`/${storeName}/add-product`}
                        style={{ textDecoration: "none" }}
                      >
                        <button className="product__empty-btn">
                          Add product
                        </button>
                      </Link>
                    </div>

                    /********** Empty state end **********/
                  )}
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Products;
