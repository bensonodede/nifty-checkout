import React from "react";
import Lottie from "react-lottie";

// Import styles
import "./styles.css";

// Define Lottie animation options
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../../images/loading.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

// Loading stateless component
const Loading = () => (
  <div className="loading__overlay">
    <div className="loading__indicator">
      <Lottie options={defaultOptions} />
    </div>
  </div>
);

export default Loading;
