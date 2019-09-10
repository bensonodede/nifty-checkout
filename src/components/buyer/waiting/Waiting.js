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
  constructor(props) {
    super(props);

    this.state = {
      polling: true
    };
  }

  render() {
    // Get URL parameters
    let { storeName, humanId } = this.props.match.params;

    // Get order ID
    let { orderId } = this.props;

    // Render component
    return (
      <BottomModal {...this.props}>
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
