// Import packages
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";

// Import Graphql query
import { PRODUCTS_FEED_QUERY } from "../../graphql/query";

// Import components
import { Loader } from "../../loader";
import { Error } from "../../error";
import EmptyState from "./EmptyState";
import InfiniteScroll from "react-infinite-scroller";
import ProductCard from "./ProductCard";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/ikons/plus";
import { Menu } from "../menu";
import { CopyLink } from "../copyLink";

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

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,

      //   Options modal state
      optionsAnimate: false,
      optionsVisible: false,

      // Delete modal state
      deleteAnimate: false,
      deleteVisible: false,

      item: ""
    };
  }

  /********** Toggle Options modal appearance **********/

  toggleOptionsModal = () => {
    let { optionsVisible } = this.state;

    if (optionsVisible) {
      this.setState({ optionsAnimate: false }, () => {
        setTimeout(() => this.setState({ optionsVisible: false }), 300);
      });
    } else {
      this.setState({ optionsVisible: true, optionsAnimate: true });
    }
  };

  /********** Toggle Delete modal appearance **********/

  toggleDeleteModal = () => {
    let { deleteVisible } = this.state;

    if (deleteVisible) {
      this.setState({ deleteAnimate: false }, () => {
        setTimeout(() => this.setState({ deleteVisible: false }), 300);
      });
    } else {
      this.setState({ deleteVisible: true, deleteAnimate: true });
    }
  };

  render() {
    // Destructure route params
    let { storeName } = this.props.match.params;

    // Destructure state
    let {
      optionsAnimate,
      optionsVisible,
      deleteAnimate,
      deleteVisible,
      item
    } = this.state;

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Dashboard - {storeName}</title>
        </Helmet>

        {/* Options modal */}
        {this.props.renderOptionsModal({
          optionsAnimate,
          optionsVisible,
          item,
          toggleModal: this.toggleOptionsModal,
          toggleDeleteModal: this.toggleDeleteModal
        })}

        {/* Delete modal */}
        {this.props.renderDeleteModal({
          deleteAnimate,
          deleteVisible,
          item,
          toggleModal: this.toggleDeleteModal
        })}

        {/* Render main product page component */}
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
                  {/* Menu */}
                  <Menu />

                  {data.productsByStore[0] ? (
                    <div>
                      {/********** Products header **********/}

                      <div className="header">
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

                      {/* Copy Store link */}
                      <CopyLink />

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
                          initialLoad={false}
                          useWindow={true}
                          hasMore={this.state.hasMore}
                          loader={<ProductLoader key={0} />}
                          loadMore={() => {
                            fetchMore({
                              variables: {
                                storeName,
                                first: 5,
                                skip: data.productsByStore.length,
                                orderBy: "updatedAt_DESC"
                              },
                              updateQuery: (prev, { fetchMoreResult }) => {
                                console.log(fetchMoreResult);
                                console.log(this.state.hasMore);
                                // Add new items to previously fetched array
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
                        >
                          {/* Render all products */}
                          {data.productsByStore.map(item => (
                            <div
                              onClick={() => {
                                this.setState({ item }, () => {
                                  this.toggleOptionsModal(item);
                                });
                              }}
                              key={item.id}
                            >
                              <ProductCard {...item} storeName={storeName} />
                            </div>
                          ))}
                        </InfiniteScroll>
                      </div>

                      {/********** Products page list end **********/}
                    </div>
                  ) : (
                    /********** Empty state **********/

                    <EmptyState storeName={storeName} />
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

export default withRouter(ProductPage);
