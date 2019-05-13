import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import styles and transitions
import "./bottom-modal.css";

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

    this.setState({ show: false }, () => {
      this.props.history.goBack();
    });
  };

  render() {
    console.log(this.props);

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
            timeout={1000}
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
