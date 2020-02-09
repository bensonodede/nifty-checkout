import React from "react";

// Import components
import Button from "components/button";

const ConfirmModalFooter = ({ toggleModal, toggleWaitingModal }) => (
  <div className="confirm-modal-footer">
    {/* Confirm button */}
    <Button
      isFullWidth
      onClick={() => {
        toggleModal();
        toggleWaitingModal();
      }}
      className="confirm-modal-footer__button"
    >
      Confirm
    </Button>

    {/* Cancel button */}
    <Button
      isFullWidth
      isOutline
      onClick={() => toggleModal()}
      className="confirm-modal-footer__button"
    >
      Cancel
    </Button>
  </div>
);

export default ConfirmModalFooter;
