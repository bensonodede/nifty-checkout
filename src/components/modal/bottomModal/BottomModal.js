import React from "react";
import { CSSTransition } from "react-transition-group";

// Import components
import Modal from "../Modal";

// Import styles
import "./styles.scss";

const BottomModal = ({ isOpen, toggleModal, children }) => (
  <Modal isOpen={isOpen} toggleModal={toggleModal}>
    {/* Modal background */}
    <CSSTransition
      appear={true}
      unmountOnExit={true}
      in={isOpen}
      classNames="bottom-modal__background-animation"
      timeout={500}
      onClick={toggleModal}
    >
      <div className="bottom-modal__background">
        {/* Modal card */}
        <CSSTransition
          appear={true}
          unmountOnExit={true}
          in={isOpen}
          classNames="bottom-modal__card-animation"
          timeout={500}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className="bottom-modal__card">{children}</div>
        </CSSTransition>
        {/* End Modal card */}
      </div>
    </CSSTransition>
    {/* End Modal background */}
  </Modal>
);

export default BottomModal;
