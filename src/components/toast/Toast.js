import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

// Import styles
import "./styles.scss";

// Import components
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";

const Toast = ({ isOpen, emoji, toggleToast, onClose, children }) =>
  ReactDOM.createPortal(
    <>
      <CSSTransition
        appear={true}
        unmountOnExit={true}
        in={isOpen}
        classNames="toast-animation"
        timeout={500}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="toast__container">
          <div className="toast__wrapper columns is-multiline is-mobile">
            <div className="column is-11-mobile is-6-tablet is-3-desktop">
              <div className="toast">
                <div className="toast__info">
                  {/* Toast content */}
                  <h5 className="has-text-white is-marginless is-size-6">
                    <span
                      role="img"
                      aria-label="emoji"
                      className="toast__emoji"
                    >
                      {emoji}
                    </span>{" "}
                    {children}
                  </h5>
                </div>

                {/* Toast close button */}
                <div className="toast__icon-container">
                  <div
                    className="toast__icon"
                    onClick={() => {
                      toggleToast();

                      // Run on close callback after exit animation
                      if (onClose) {
                        setTimeout(() => {
                          onClose();
                        }, 500);
                      }
                    }}
                  >
                    <Icon icon={ic_close} size={"100%"} />
                  </div>
                </div>

                {/* End toast close */}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>,
    document.body
  );

export default Toast;
