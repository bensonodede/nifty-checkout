// Import packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import InfiniteScroll from "react-infinite-scroller";

// Import Graphql query
import { PRODUCTS_QUERY } from "../graphql/query";

// Import components
import ProductCard from "./ProductCard";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/ikons/plus";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/Products.css";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true
    };
  }

  render() {
    let { storeName } = this.props.match.params;

    return (
      <div className="App-container">
        {/* Product page header */}
        <div className="header header--product">
          <h1 className="header__title">Welcome.</h1>
          <p className="header__text">
            Keep track of and edit all your products. Happy selling!
            <span role="img" aria-label="100">
              💯
            </span>
          </p>
        </div>

        {/* Products list */}
        <Query
          query={PRODUCTS_QUERY}
          variables={{
            storeName: "Store1",
            first: 5,
            skip: 0,
            orderBy: "createdAt_ASC"
          }}
        >
          {({ loading, error, data, fetchMore }) => {
            if (loading) {
              return <p>loading</p>;
            }

            if (error) {
              console.log(error);
            }

            console.log(data);
            return (
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

                <InfiniteScroll
                  pageStart={0}
                  initialLoad={true}
                  useWindow={true}
                  hasMore={this.state.hasMore}
                  loadMore={() => {
                    fetchMore({
                      variables: {
                        first: 5,
                        skip: data.productsByStore.length,
                        orderBy: "createdAt_ASC"
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
                  loader={
                    <div className="loader" key={0}>
                      Loading ...
                    </div>
                  }
                >
                  {data.productsByStore.map(item => (
                    <ProductCard key={item.id} {...item} />
                  ))}
                </InfiniteScroll>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Products;
