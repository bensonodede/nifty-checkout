import React, { Component } from "react";
import Cookies from "js-cookie";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";

// Import graphql query
import { PRODUCT_HUMANID_QUERY } from "../../graphql/query";

// Import components
import ReviewLoader from "./ReviewLoader";
import ImgLoaded from "./ImgLoaded";
import { Error } from "../../error";

// Import styles
import "./styles.css";

class Review extends Component {
  constructor(props) {
    super(props);

    // Define state
    this.state = {
      phoneNum: Cookies.get("phoneNum") || null,
      imgLoaded: false,
      isPaused: true
    };
  }

  // Check for phone number
  handleClick = productData => {
    // Get phone number from cookies
    let { phoneNum } = this.state;

    // Get route parameters
    let { storeName, humanId } = this.props.match.params;

    // Redirect to confirmation modal
    if (phoneNum) {
      this.props.history.push({
        pathname: `/${storeName}/${humanId}/confirm`,
        state: { modal: true, data: productData.productByHumanId }
      });
    }

    // Redirect to phone number page
    else {
      this.props.history.push({
        pathname: `/${storeName}/${humanId}/phone-number`,
        state: { data: productData.productByHumanId }
      });
    }
  };

  render() {
    let { storeName, humanId } = this.props.match.params;
    let { imgLoaded, isPaused } = this.state;

    return (
      <div>
        {/********** START: QUERY PRODUCT BY HUMAN ID **********/}
        <Query
          query={PRODUCT_HUMANID_QUERY}
          variables={{
            storeName,
            humanId
          }}
        >
          {({ loading, error, data }) => {
            // Loading state
            if (loading) {
              return <ReviewLoader />;
            }

            // Error state
            if (error) {
              return <Error />;
            }

            // Destructure product data
            let { imgUrl } = data.productByHumanId;

            // Render component
            return (
              <div className="review">
                {/* Document title */}
                <Helmet>
                  <title>
                    {data.productByHumanId.name} - {storeName}
                  </title>
                </Helmet>

                {/* Image component */}
                <img
                  onLoad={() => {
                    // Set image loaded state
                    this.setState({ imgLoaded: true, isPaused: false });
                  }}
                  src={imgUrl}
                  alt="unsplash"
                  className={imgLoaded ? "review__img" : "review__img-loading"}
                />

                {/* Image loaded  */}
                {imgLoaded ? (
                  <ImgLoaded
                    productData={data}
                    handleClick={this.handleClick}
                    isPaused={isPaused}
                    imgLoaded={imgLoaded}
                  />
                ) : (
                  <ReviewLoader />
                )}
              </div>
            );
          }}
        </Query>
        {/********** END: QUERY PRODUCT BY HUMAN ID **********/}
      </div>
    );
  }
}

export default Review;
