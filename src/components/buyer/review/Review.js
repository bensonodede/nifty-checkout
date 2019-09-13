import React, { Component } from "react";

// Import components
import ReviewPage from "./ReviewPage";
import { Confirm } from "../confirm";
import { Waiting } from "../waiting";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderId: null
    };
  }

  // Handle create order completion
  onOrderComplete = orderId => {
    this.setState({ orderId });
  };

  render() {
    return (
      <div>
        <ReviewPage
          /********** Render Confirm modal **********/

          renderConfirmModal={({
            confirmAnimate,
            confirmVisible,
            toggleModal,
            toggleWaitingModal,
            data
          }) => (
            <Confirm
              animate={confirmAnimate}
              visible={confirmVisible}
              toggleModal={toggleModal}
              toggleWaitingModal={toggleWaitingModal}
              data={data}
              onOrderComplete={this.onOrderComplete}
            />
          )}
          /********** Render Waiting modal **********/

          renderWaitingModal={({
            waitingAnimate,
            waitingVisible,
            toggleWaitingModal
          }) => (
            <Waiting
              animate={waitingAnimate}
              visible={waitingVisible}
              toggleWaitingModal={toggleWaitingModal}
              orderId={this.state.orderId}
            />
          )}
        />
      </div>
    );
  }
}

export default Review;
