import React from "react";
import Lottie from "react-lottie";

// Import styles
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
  <div className="simple-loader">
    <div className="column is-10 is-paddingless">
      <div className="columns is-centered is-mobile">
        <div className="column is-3-mobile is-2-tablet is-1-desktop is-paddingless">
          <div className="loader">
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SimpleLoader;
