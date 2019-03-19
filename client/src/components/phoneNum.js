import React, { Component } from "react";

import "./checkout.css";
class PhoneNum extends Component {
  render() {
    return (
      <div className="App-container">
        {/* Phone number header */}
        <div className="header">
          <h1 className="header__title">Confirm your</h1>
          <h1 className="header__title">phone number</h1>
        </div>

        {/*  */}
        <div className="description">
          <p className="description__text">
            We use your phone number to confirm your payment, and the seller
            might want to contact you.
            <span role="img" aria-label="call-hand">
              🤙🏾
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default PhoneNum;
