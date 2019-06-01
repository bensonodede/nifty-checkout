import React from "react";
import Lottie from "react-lottie";

// Import styles
import "./styles.css";

// Define lottie options
const defaultOptions = {
  loop: true,
  autoplay: false,
  animationData: require("../../images/pulse.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

// Pulse button component
const PulseBtn = props => (
  <div onClick={props.onClick} className="pulse">
    {/*  */}
    <div className="pulse__lottie">
      <Lottie options={defaultOptions} isPaused={props.isPaused} />
    </div>

    {/*  */}
    <div className="pulse__btn">
      <div className="pulse__icon">{props.children}</div>
    </div>
  </div>
);

export default PulseBtn;
