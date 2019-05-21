import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

// Import styles and transitions
import "./styles.css";

//! Unmount component after animation
class BottomModal extends Component {
  constructor() {
    super();

    //
    this.state = {
      show: true
    };
  }

  goBack = e => {
    e.stopPropagation();

    //? Fix for modal double-click: Prevents going back twice
    if (this.state.show) {
      this.setState({ show: false }, () => {
        this.props.goBack();
      });
    }
  };

  render() {
    let { show } = this.state;
    return (
      <div>
        <div className="bottom-modal" onClick={this.goBack}>
          {/* Modal card transition */}
          <CSSTransition
            appear={true}
            unmountOnExit={true}
            in={show}
            classNames="card"
            timeout={500}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {/* Modal card */}
            <div className="bottom-modal__card">{this.props.children}</div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default BottomModal;
