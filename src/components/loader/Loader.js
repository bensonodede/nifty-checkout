import React from "react";
import Lottie from "react-lottie";

// Import loader styles
import "./styles.css";

// Define lottie options
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../../images/loader.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

// Loader component
const Loader = () => (
  <div className="loader">
    <Lottie options={defaultOptions} />
  </div>
);

export default Loader;
