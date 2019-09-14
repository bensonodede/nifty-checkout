import React from "react";
import { Link } from "react-router-dom";
// Import styles
import "./styles.css";

const Success = props => {
  let { storeName, humanId } = props.match.params;
  return (
    <div className="App-container success">
      <h1 className="success__title">
        Thanks, your order was successful.
        <span role="img" aria-label="hand">
          🎉
        </span>
      </h1>
      <p className="success__text">
        We've sent you an <span className="success__text--bold">SMS </span>
        with the receipt and our contact info. We'll contact you in{" "}
        <span className="success__text--bold">1 hour or less </span> to arrange
        a pickup or delivery.
      </p>

      {/* Go back button */}
      <button
        onClick={() => props.history.push(`/${storeName}/${humanId}`)}
        className="success__btn"
      >
        Go Back
      </button>

      {/* Finn label */}
      <p className="success__label">
        <span
          role="img"
          aria-label="call-hand"
          className="success__label-emoji"
        >
          ⚡
        </span>
        by{" "}
        <Link to={"/"}>
          <span className="success__text--bold success--pink">Finn.</span>
        </Link>
      </p>
    </div>
  );
};
export default Success;
