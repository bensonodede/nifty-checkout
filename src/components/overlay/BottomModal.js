import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//
import "./modal.css";

//! Unmount component after animation
class BottomModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: null,
      mount: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    let { show } = nextProps;
    if (show) {
      this.setState({ show, mount: true });
    }

    this.setState({ show });
  }

  closeModal = event => {
    event.preventDefault();
    this.setState({ mount: false }, () => {
      setTimeout(() => {
        this.setState({ show: false });
      }, 1000);
    });
  };

  render() {
    let { show, mount } = this.state;
    return (
      <TransitionGroup>
        {show && (
          <CSSTransition in={show} classNames="modal" timeout={1000}>
            <div className="bottom-modal" onClick={this.closeModal}>
              {/*  */}

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
                <div className="bottom-modal__card">
                  <div>
                    <div className="bottom-modal__paragraph">
                      <p className="bottom-modal__text">
                        Are you sure you want to leave? You will lose any data
                        you may have entered.
                      </p>
                    </div>

                    {/*  */}
                    <div className="bottom-modal__footer">
                      <button className="bottom-modal__button bottom-modal__button--red">
                        Leave
                      </button>
                      <button
                        onClick={this.closeModal}
                        className="bottom-modal__button"
                      >
                        Go back
                      </button>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default BottomModal;
