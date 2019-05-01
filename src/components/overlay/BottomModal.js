import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import styles and transitions
import "./bottom-modal.css";

//! Unmount component after animation
class BottomModal extends Component {
  constructor(props) {
    super(props);

    //
    this.state = {
      show: false,
      mount: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // Get show state from parent component via props
    let { show } = nextProps;

    // Render background and mount card
    if (show) {
      this.setState({ show, mount: true });
    }

    // Set show state to false
    this.setState({ show });
  }

  // Close modal function
  closeModal = () => {
    // Unmount modal card on close
    this.setState({ mount: false }, () => {
      // Delay unmounting of modal overlay
      setTimeout(() => {
        this.setState({ show: false });
      }, 300);
    });
  };

  render() {
    // Declare component state variables
    let { show, mount } = this.state;

    return (
      <TransitionGroup>
        {show && (
          /* Modal background Transition */
          <CSSTransition in={show} classNames="modal" timeout={1000}>
            {/* Modal background */}
            <div className="bottom-modal" onClick={this.closeModal}>
              {/* Modal card transition */}
              <CSSTransition
                appear={true}
                unmountOnExit={true}
                in={mount}
                classNames="card"
                onClick={event => {
                  event.stopPropagation();
                }}
                timeout={1500}
              >
                {/* Modal card */}
                <div className="bottom-modal__card">
                  <div>
                    <div className="bottom-modal__paragraph">
                      <p className="bottom-modal__text">
                        Are you sure you want to leave? You will lose any data
                        you may have entered.
                      </p>
                    </div>

                    {/* Modal card footer */}
                    <div className="bottom-modal__footer">
                      {/* Modal button */}
                      <button className="bottom-modal__button bottom-modal__button--red">
                        Leave
                      </button>

                      {/* Modal button */}
                      <button
                        onClick={this.closeModal}
                        className="bottom-modal__button"
                      >
                        Go back
                      </button>
                    </div>
                    {/* Modal card footer End */}
                  </div>
                </div>
                {/* Modal card End */}
              </CSSTransition>
              {/* Modal card transition End */}
            </div>
            {/* Modal background End */}
          </CSSTransition>
          /* Modal background Transition End */
        )}
      </TransitionGroup>
    );
  }
}

export default BottomModal;
