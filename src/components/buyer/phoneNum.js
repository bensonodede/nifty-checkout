import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { arrow_right } from "react-icons-kit/ikons/arrow_right";

import NumForm from "../numForm/numForm";
import "../../styles/index.css";
import "../../styles/buyer/phoneNum.css";

class PhoneNum extends Component {
  render() {
    return (
      <div className="App-container">
        {/* Phone number header */}
        <div className="header">
          <h1 className="header__title">What's your</h1>
          <h1 className="header__title">phone number?</h1>
        </div>

        {/* Phone numeber description */}
        <div className="description">
          <p className="description__text">
            We use your phone number to confirm your payment. Also, the seller
            might want to contact you.
            <span role="img" aria-label="call-hand">
              🤙🏾
            </span>
          </p>
        </div>

        {/* Phone number input */}
        <NumForm />

        {/* Phone number button */}
        <div className="phoneNum__footer">
          <div className="circular-btn">
            <div className="circular-btn__icon" style={{ color: "#E5E5E5" }}>
              <Icon icon={arrow_right} size={25} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneNum;
