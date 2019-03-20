import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import styles
import "../../styles/index.css";
import "../../styles/buyer/review.css";

class Payment extends Component {
  render() {
    let { storeName } = this.props.match.params;

    return (
      <div>
        <div className="App-container">
          {/* Checkout header */}

          <div className="header">
            <p className="header__sub-title ">Step 1 of 3</p>
            <h1 className="header__title">Review item</h1>
          </div>

          {/* Checkout body */}

          <div className="product">
            {/* Product and store name */}

            <div className="product__header">
              <p className="product__title">Product name</p>
              <p className="product__title product__title--light">Shop name</p>
            </div>
            {/* Product Image */}

            <div className="product__img">
              <img
                src="https://source.unsplash.com/random/800x800"
                alt="unsplash"
                className="product__photo"
              />
            </div>
          </div>
        </div>

        {/* Checkout footer  */}

        <div className="footer">
          <hr className="footer__border" />

          <div className="footer__body">
            <Link
              to={`/${storeName}/payment`}
              style={{ textDecoration: "none" }}
            >
              <button className="footer__btn footer__btn--large">
                Add payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
