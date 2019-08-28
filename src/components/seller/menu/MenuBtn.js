import React, { Component } from "react";

import Lottie from "react-lottie";

// Import styles
import "./styles.css";

class MenuBtn extends Component {
  constructor(props) {
    super(props);

    // Button and lottie state
    this.state = {
      isStopped: true,
      direction: 1
    };
  }

  // Handle button click event
  handleClick = () => {
    const { isStopped } = this.state;

    // Reverse lottie animation direction
    if (!isStopped) {
      this.setState(prevState => ({
        direction: prevState.direction * -1
      }));
    }

    // Play lottie animation
    this.setState({ isStopped: false });
  };

  render() {
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
      <button
        onClick={() => {
          this.handleClick();
          this.props.toggle();
        }}
        className="menu-btn"
      >
        <div className="menu-btn__icon-container">
          <Lottie
            className="menu-btn__icon"
            options={defaultOptions}
            isClickToPauseDisabled={true}
            direction={this.state.direction}
            isStopped={this.state.isStopped}
            isPaused={false}
            speed={1}
          />
        </div>
      </button>
    );
  }
}

export default MenuBtn;
