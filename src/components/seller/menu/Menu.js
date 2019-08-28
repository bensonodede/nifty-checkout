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
      animate: false
    };
  }

  // Toggle menu appearance
  toggleMenu = () => {
    let { visible } = this.state;

    if (visible) {
      this.setState({ animate: false });
      setTimeout(() => this.setState({ visible: false }), 500);
    } else {
      this.setState({ visible: true, animate: true });
    }
  };

  render() {
    // Destructure state
    let { visible, animate } = this.state;

    return (
      <div>
        {/* Menu toggle button */}
        <MenuBtn toggle={this.toggleMenu} />

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
            <div className="menu">
              <MenuList />
            </div>
          </CSSTransition>
        ) : null}
      </div>
    );
  }
}

export default Menu;
