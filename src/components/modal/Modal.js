import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

// Import styles
import "./styles.css";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      animate: false
    };
  }

  /********** Toggle menu appearance **********/

  toggleModal = () => {
    let { visible } = this.state;

    // Animate modal out then close modal
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
        {/* Modal content */}
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
            <div className="">{}</div>
          </CSSTransition>
        ) : null}
      </div>
    );
  }
}

export default Modal;
