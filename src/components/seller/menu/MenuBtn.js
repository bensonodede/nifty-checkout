import React from "react";
import Lottie from "react-lottie";

// Import styles
import "./styles.css";

const MenuBtn = props => {
  // Destructure props
  let { toggleMenu, toggleBtn, direction, isStopped } = props;

  // Define lottie options
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: require("../../../images/menu.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    // Toggle menu modal then toggle menu button animation
    <button
      onClick={() => {
        toggleMenu();
        toggleBtn();
      }}
      className="menu-btn"
    >
      {/* Lottie animation button */}
      <div className="menu-btn__icon-container">
        <Lottie
          className="menu-btn__icon"
          options={defaultOptions}
          isClickToPauseDisabled={true}
          direction={direction}
          isStopped={isStopped}
          isPaused={false}
          speed={1}
        />
      </div>
    </button>
  );
};

export default MenuBtn;
