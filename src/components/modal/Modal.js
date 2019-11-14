import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

// Import styles
import "./styles.scss";

const Modal = ({ isOpen, toggleModal, children }) =>
  ReactDOM.createPortal(
    <>
      {/* Modal background */}
      <CSSTransition
        appear={true}
        unmountOnExit={true}
        in={isOpen}
        classNames="modal__background-animation"
        timeout={500}
        onClick={toggleModal}
      >
        <div className="modal__background">
          {/* Modal card */}
          <CSSTransition
            appear={true}
            unmountOnExit={true}
            in={isOpen}
            classNames="modal__card-animation"
            timeout={500}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <div className="modal__card">
              {/* Modal content */}
              {children}
            </div>
          </CSSTransition>
          {/* End Modal card */}
        </div>
      </CSSTransition>
      {/* End Modal background */}
    </>,
    document.body
  );

export default Modal;
