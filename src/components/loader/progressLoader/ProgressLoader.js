import React from "react";

// Import styles
import "react-step-progress-bar/styles.css";
import "./styles.scss";

// Import components
import { ProgressBar } from "react-step-progress-bar";

const ProgressLoader = ({ percent }) => (
  <ProgressBar percent={percent} filledBackground="#356ee1" />
);

export default ProgressLoader;
