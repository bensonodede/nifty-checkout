import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroller";

// Import Graphql query
import { PRODUCTS_FEED_QUERY } from "../../graphql/query";

// Import components
import { Menu } from "../menu";
import { Error } from "../../error";
import { Loader, ImgLoader } from "../../loader";
import { AuthUserContext } from "../../session";

// Import styles
import "./styles.css";

// Define breakpoint columns
const breakpointCols = {
  default: 2
};

// Home loader component
const HomeLoader = () => (
  <div className="home__loader-container">
    <div className="home__loader">
      <Loader key={0} />
    </div>
  </div>
);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true
    };
  }

  render() {
    // Get state params
    const { storeName } = this.props.match.params;

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>{storeName}</title>
        </Helmet>

        {/* Check auth state */}
        <AuthUserContext.Consumer>
          {authUser => {
            return (
              <div className="home">
                {/* Render menu if logged in */}
                {authUser ? <Menu /> : null}
                <Query
                  query={PRODUCTS_FEED_QUERY}
                  variables={{
                    storeName,
                    first: 4,
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
                      return <HomeLoader />;
                    }

                    return (
                      /* Infinite scroll list */
                      <div>
                        {/* Store title */}
                        <div className="home__header">
                          <h1 className="home__title">
                            <span className="home__title--very-light">
                              Hey you,
                            </span>
                            <br />
                            <span className="home__title--light">
                              welcome to
                            </span>
                            <br />
                            {storeName}.{" "}
                            <span
                              role="img"
                              aria-label="hand"
                              className="home__emoji"
                            >
                              🤗
                            </span>
                          </h1>
                        </div>
                        {/* End store title */}
                        <InfiniteScroll
                          pageStart={0}
                          initialLoad={true}
                          useWindow={false}
                          hasMore={this.state.hasMore}
                          loader={<HomeLoader key={0} />}
                          loadMore={() => {
                            fetchMore({
                              variables: {
                                storeName,
                                first: 4,
                                skip: data.productsByStore.length,
                                orderBy: "updatedAt_DESC"
                              },
                              updateQuery: (prev, { fetchMoreResult }) => {
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
                          {/* Store grid */}
                          <Masonry
                            breakpointCols={breakpointCols}
                            className="home__masonry-grid"
                            columnClassName="home__masonry-grid_column"
                          >
                            {/* Store grid item */}
                            {data.productsByStore.map(item => (
                              <Link
                                key={item.id}
                                to={{
                                  pathname: `/${storeName}/${item.humanId}`
                                }}
                              >
                                <div className="home__grid-item">
                                  <ImgLoader
                                    src={item.imgUrl}
                                    alt={item.name}
                                    className={"home__grid-img"}
                                  />
                                </div>
                              </Link>
                            ))}
                          </Masonry>
                          {/* End store grid */}
                        </InfiniteScroll>
                      </div>
                      /* End Infinte scroll */
                    );
                  }}
                </Query>
              </div>
            );
          }}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

export default Home;
