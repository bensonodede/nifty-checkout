import React, { Component } from "react";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";

// Import components
import { ORDER_QUERY } from "../../graphql/query";

// Import styles
import "./styles.css";
import ReviewLoader from "../review/ReviewLoader";

class Waiting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polling: true
    };
  }

  componentWillMount() {
    // Get URL parameters
    let { storeName, humanId } = this.props.match.params;

    if (!this.props.location.state || !this.props.location.state.orderId) {
      this.props.history.push(`/${storeName}/${humanId}`);
    }
  }
  render() {
    // Get URL parameters
    let { storeName, humanId } = this.props.match.params;

    // Get order ID
    let orderId;

    if (!this.props.location.state || !this.props.location.state.orderId) {
      this.props.history.push(`/${storeName}/${humanId}`);
    } else {
      orderId = this.props.location.state.orderId;
    }

    // Render component
    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Waiting for payment - {storeName}</title>
        </Helmet>

        {/* Poll for order */}
        <Query
          fetchPolicy={"network-only"}
          query={ORDER_QUERY}
          pollInterval={400}
          variables={{
            id: orderId
          }}
          onCompleted={data => {
            if (data.order) {
              // If order status is 0, redirect to success page
              if (!data.order.status) {
                this.props.history.push(`/${storeName}/${humanId}/success`);
              }
            }

            // Redirect to product page
            else {
              this.props.history.push(`/${storeName}/${humanId}`);
            }
          }}
        >
          {({ error }) => {
            // Error state
            if (error) {
              this.props.history.push(`/${storeName}/${humanId}`);
            }

            /********** Return component  **********/

            return (
              <div className="App-container waiting">
                <h1 className="waiting__title">
                  Waiting to confirm your payment.
                </h1>
                <ReviewLoader />
              </div>
            );

            /********** End Return component **********/
          }}
        </Query>
      </div>
    );
  }
}

export default Waiting;
