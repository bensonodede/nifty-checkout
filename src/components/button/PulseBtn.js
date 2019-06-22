import React from "react";
import Lottie from "react-lottie";

// Import styles
import "./styles.css";

// Pulse button component
const PulseBtn = props => {
  let { dark } = props;
  let animationData;

  if (dark) {
    // Return dark pulse animation
    animationData = require("../../images/pulse-black.json");
  } else {
    // Return light pulse animation
    animationData = require("../../images/pulse.json");
  }

  // Define lottie options
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <button
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
      className="pulse"
    >
      {/* Lottie pulse animation */}
      <div className="pulse__lottie">
        <Lottie options={defaultOptions} isPaused={props.isPaused} />
      </div>

      {/* Circular button */}
      <div className={`pulse__btn  ${props.btnStyle}`}>{props.children}</div>
    </button>
  );
};

export default PulseBtn;
