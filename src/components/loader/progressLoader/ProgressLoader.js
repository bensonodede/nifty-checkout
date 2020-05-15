import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const ProgressLoader = ({ percent }) => (
  <ProgressBar
    percent={percent}
    filledBackground="linear-gradient(to right, #6ac0fb, #356ee1)"
  />
);

export default ProgressLoader;
