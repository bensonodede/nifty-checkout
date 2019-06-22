import React from "react";
import Lottie from "react-lottie";
import { CSSTransition } from "react-transition-group";

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
  <CSSTransition
    in={true}
    appear={true}
    mountOnEnter={true}
    unmountOnExit={true}
    classNames="transition__loader"
    timeout={1000}
  >
    <div className="loader">
      <Lottie options={defaultOptions} />
    </div>
  </CSSTransition>
);

export default Loader;
