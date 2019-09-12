import React, { Component } from "react";
import Cookies from "js-cookie";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";

// Import graphql query
import { PRODUCT_HUMANID_QUERY } from "../../graphql/query";

// Import components
import ReviewLoader from "./ReviewLoader";
import ReviewDetails from "./ReviewDetails";
import { Error } from "../../error";

// Import styles
import "./styles.css";

class ReviewPage extends Component {
  constructor(props) {
    super(props);

    // Define state
    this.state = {
      phoneNum: Cookies.get("phoneNum") || null,
      imgLoaded: false,
      isPaused: true,

      // Confirm modal state
      confirmVisible: false,
      confirmAnimate: false,

      // Waiting modal state
      waitingAnimate: false,
      waitingVisible: false
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
      this.toggleModal();
    }

    // Redirect to phone number page
    else {
      this.props.history.push({
        pathname: `/${storeName}/${humanId}/phone-number`,
        state: { data: productData.productByHumanId }
      });
    }
  };

  /********** Toggle Confirm modal appearance **********/

  toggleModal = () => {
    let { confirmVisible } = this.state;

    if (confirmVisible) {
      this.setState({ confirmAnimate: false });
      setTimeout(() => this.setState({ confirmVisible: false }), 300);
    } else {
      this.setState({ confirmVisible: true, confirmAnimate: true });
    }
  };

  /********** Toggle Waiting modal appearance **********/

  toggleWaitingModal = () => {
    let { waitingVisible } = this.state;

    if (waitingVisible) {
      this.setState({ waitingAnimate: false });
      setTimeout(() => this.setState({ waitingVisible: false }), 500);
    } else {
      this.setState({ waitingVisible: true, waitingAnimate: true });
    }
  };

  render() {
    let { storeName, humanId } = this.props.match.params;
    let {
      // Review page props
      imgLoaded,
      isPaused,

      // Confirm modal props
      confirmVisible,
      confirmAnimate,

      // Waiting modal props
      waitingVisible,
      waitingAnimate
    } = this.state;

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
            let { imgUrl, name } = data.productByHumanId;

            // Render component
            return (
              <div>
                {/* Waiting modal */}

                {this.props.renderWaitingModal({
                  waitingAnimate,
                  waitingVisible,
                  toggleModal: this.toggleWaitingModal,
                  orderId: this.props.orderId
                })}

                {/* Confirmation modal */}

                {this.props.renderConfirmModal({
                  confirmAnimate,
                  confirmVisible,
                  toggleModal: this.toggleModal,
                  toggleWaitingModal: this.toggleWaitingModal,
                  data: data.productByHumanId,
                  onOrderComplete: this.props.onOrderComplete
                })}

                {/* Review component */}
                <div className="review">
                  {/* Document title */}
                  <Helmet>
                    <title>
                      {name} - {storeName}
                    </title>
                  </Helmet>

                  {/* Image component */}
                  <img
                    onLoad={() => {
                      // Set image loaded state
                      this.setState({ imgLoaded: true }, () => {
                        // Play pulse animation after 3s
                        setTimeout(() => {
                          this.setState({ isPaused: false });
                        }, 3000);
                      });
                    }}
                    src={imgUrl}
                    alt="unsplash"
                    className={
                      imgLoaded ? "review__img" : "review__img-loading"
                    }
                  />

                  {/* Image loaded  */}
                  {imgLoaded ? (
                    <ReviewDetails
                      productData={data.productByHumanId}
                      handleClick={this.handleClick}
                      isPaused={isPaused}
                      imgLoaded={imgLoaded}
                    />
                  ) : (
                    <ReviewLoader />
                  )}
                </div>
              </div>
            );
          }}
        </Query>
        {/********** END: QUERY PRODUCT BY HUMAN ID **********/}
      </div>
    );
  }
}

export default withRouter(ReviewPage);
