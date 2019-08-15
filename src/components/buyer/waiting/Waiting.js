import React, { Component } from "react";

import { Query } from "react-apollo";
import { ORDER_QUERY } from "../../graphql/query";

// Import styles
import "./styles.css";
import ReviewLoader from "../review/ReviewLoader";

class Waiting extends Component {
  render() {
    // Get order ID
    let { orderId } = this.props.location.state;

    // Render component
    return (
      // Poll for order
      <Query
        fetchPolicy={"network-only"}
        query={ORDER_QUERY}
        pollInterval={500}
        variables={{
          id: orderId
        }}
      >
        {({ loading, error, data, stopPolling }) => {
          if (error) {
            console.log(error);
          }

          //
          if (data) {
            if (!data.order) {
              console.log("DELETED: ");
              console.log(data.order);
              stopPolling();
            } else {
              console.log("POLLED: ");
              console.log(data);
            }
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
    );
  }
}

export default Waiting;
