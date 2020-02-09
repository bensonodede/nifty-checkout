import React, { Component } from "react";
import { Query } from "react-apollo";

// Import components
import { Loader } from "../../loader";
import { ORDER_QUERY } from "../../graphql/query";

// Import styles
import "./styles.css";
import { withRouter } from "react-router-dom";
import { BottomModal } from "../../modal";

class Waiting extends Component {
  render() {
    // Get URL parameters
    let { storeName, humanId } = this.props.match.params;

    // Get order ID
    let { orderId } = this.props;

    // Render component
    return (
      <BottomModal {...this.props} toggleModal={null}>
        {/* Poll for order */}
        <Query
          fetchPolicy={"network-only"}
          query={ORDER_QUERY}
          pollInterval={1000}
          variables={{ id: orderId }}
          onCompleted={async result => {
            // If order exists
            if (!!result.order) {
              // Get order status
              let { status } = result.order;

              // If order status is successful
              if (status === 0) {
                this.props.history.push(`/${storeName}/${humanId}/success`);
              }

              // If payment is cancelled or times out
            } else {
              window.location.reload();
            }
          }}
        >
          {({ error }) => {
            // Error state
            if (error) {
              console.log(error);
            }

            /********** Return component  **********/

            return (
              <div className="App-container waiting">
                <h1 className="waiting__title">
                  Waiting to confirm your payment.
                </h1>
                {/********** Loader **********/}
                <div className="confirm__loader-container">
                  <div className="confirm__loader">
                    <Loader />
                  </div>
                </div>
              </div>
            );

            /********** End Return component **********/
          }}
        </Query>
      </BottomModal>
    );
  }
}

export default withRouter(Waiting);
