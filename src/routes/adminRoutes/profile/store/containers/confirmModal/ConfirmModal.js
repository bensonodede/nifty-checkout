import React from "react";
import { Breakpoint } from "react-socks";

// Import components
import { BottomModal, CenterModal } from "components/modal";
import ConfirmModalContent from "./ConfirmModalContent";

// Import styles
import "./styles.scss";

const ConfirmModal = ({
  isOpen,
  toggleModal,
  toggleWaitingModal,
  initialValues,
  values
}) => (
  <>
    {/* Mobile modal */}
    <Breakpoint mobile only>
      <BottomModal isOpen={isOpen} toggleModal={toggleModal}>
        <ConfirmModalContent
          toggleModal={toggleModal}
          toggleWaitingModal={toggleWaitingModal}
          initialValues={initialValues}
          values={values}
        />
      </BottomModal>
    </Breakpoint>

    {/* Desktop modal */}
    <Breakpoint tablet up>
      <CenterModal isOpen={isOpen} toggleModal={toggleModal}>
        <ConfirmModalContent
          toggleModal={toggleModal}
          toggleWaitingModal={toggleWaitingModal}
          initialValues={initialValues}
          values={values}
        />
      </CenterModal>
    </Breakpoint>
  </>
);

export default ConfirmModal;
