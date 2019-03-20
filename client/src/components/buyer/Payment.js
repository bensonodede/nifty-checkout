import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { arrow_right } from "react-icons-kit/ikons/arrow_right";

// Import styles
import "../../styles/index.css";
import "../../styles/buyer/payment.css";

class Payment extends Component {
  render() {
    let { storeName } = this.props.match.params;

    return (
      <div>
        <div className="App-container">
          {/* Checkout header */}
          <div className="header">
            <p className="header__sub-title ">Step 2 of 3</p>
            <h1 className="header__title">Pay with</h1>
          </div>

          {/* Checkout body */}
          <Link
            to={`/${storeName}/phonenum`}
            style={{ textDecoration: "none" }}
          >
            <div className="payment">
              <div className="payment__row">
                {/* Payment Icon and name */}
                <div className="payment__row-wrap">
                  <div className="payment__img">
                    <img
                      src={require("../../images/mpesa-logo.png")}
                      alt="Mpesa-logo"
                      className="payment__photo"
                    />
                  </div>

                  {/* Payment label */}
                  <p className="payment__text">M-pesa</p>
                </div>

                {/* Payment row forward chevron */}
                <div className="payment__icon" style={{ color: "#E5E5E5" }}>
                  <Icon icon={arrow_right} size={25} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Payment;
