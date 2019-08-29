import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

// Import components
import MenuBtn from "./MenuBtn";
import MenuList from "./MenuList";

// Import styles
import "./styles.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      animate: false,
      isStopped: true,
      direction: 1
    };
  }

  /********** Toggle menu appearance **********/

  toggleMenu = () => {
    let { visible } = this.state;

    if (visible) {
      this.setState({ animate: false });
      setTimeout(() => this.setState({ visible: false }), 500);
    } else {
      this.setState({ visible: true, animate: true });
    }
  };

  /********** Toggle button animation **********/

  toggleBtn = () => {
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
    // Destructure state
    let { visible, animate, isStopped, direction } = this.state;

    return (
      <div>
        {/* Menu toggle button */}
        <MenuBtn
          toggleMenu={this.toggleMenu}
          toggleBtn={this.toggleBtn}
          direction={direction}
          isStopped={isStopped}
        />

        {/* Menu content */}
        {visible ? (
          <CSSTransition
            appear={true}
            unmountOnExit={true}
            in={animate}
            classNames="menu-modal"
            timeout={500}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {/* Menu links */}
            <div className="menu">
              <MenuList
                toggleMenu={this.toggleMenu}
                toggleBtn={this.toggleBtn}
              />
            </div>
          </CSSTransition>
        ) : null}
      </div>
    );
  }
}

export default Menu;
