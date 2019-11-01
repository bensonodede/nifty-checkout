import React from "react";
import Lottie from "react-lottie";
import { CSSTransition } from "react-transition-group";

// Import loader styles
import "./styles.scss";

// Define lottie options
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("images/loader.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

// Loader component
const SimpleLoader = () => (
  <CSSTransition
    in={true}
    appear={true}
    mountOnEnter={true}
    unmountOnExit={true}
    classNames="loader-animation"
    timeout={1000}
  >
    <div className="columns is-multiline is-mobile is-centered">
      <div className="column is-3-mobile is-2-tablet is-1-desktop">
        <div className="loader">
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </div>
      </div>
    </div>
  </CSSTransition>
);

export default SimpleLoader;
