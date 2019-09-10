import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

// Import styles and transitions
import "./styles.css";

class BottomModal extends Component {
  render() {
    // Destructure props
    let { visible, animate, toggleModal } = this.props;

    return (
      <div>
        {visible ? (
          /* End Modal background */
          <CSSTransition
            appear={true}
            unmountOnExit={true}
            in={animate}
            classNames="modal"
            timeout={500}
            onClick={toggleModal}
          >
            <div className="bottom-modal" onClick={this.toggleModal}>
              {/* Modal card transition */}
              <CSSTransition
                appear={true}
                unmountOnExit={true}
                in={animate}
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
          </CSSTransition>
        ) : /* End Modal background */
        null}
      </div>
    );
  }
}

BottomModal.propTypes = {
  animate: PropTypes.bool,
  visible: PropTypes.bool,
  toggleModal: PropTypes.func
};

export default BottomModal;
