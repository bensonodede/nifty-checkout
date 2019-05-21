import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import components
import { PulseBtn } from "../button";

// Import styles
import "../../styles/index.css";
import "../../styles/buyer/review.css";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPaused: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isPaused: false });
    }, 10000);
  }

  render() {
    let { storeName } = this.props.match.params;

    return (
      <div>
        {/* Product Image */}
        <img
          src={require("../../images/9fb4b2761138ed08d135da600e33bd89.png")}
          alt="unsplash"
          className="review__img"
        />

        <div className="App-container review--container">
          {/* Product and store name */}

          <div className="review__header">
            <p className="review__title">Reddish blue</p>
            <p />
          </div>

          <div>
            <p>Other stuff goes here.</p>
          </div>
        </div>

        {/* Checkout footer  */}
        <div className="review__btn">
          <PulseBtn isPaused={this.state.isPaused}>
            <div />
          </PulseBtn>
        </div>
      </div>
    );
  }
}

export default Payment;
