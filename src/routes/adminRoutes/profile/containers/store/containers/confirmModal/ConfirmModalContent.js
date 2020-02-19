import React from "react";

// Import components
import ConfirmModalHeader from "./ConfirmModalHeader";
import ConfirmModalUsername from "./ConfirmModalUsername";
import ConfirmModalPhone from "./ConfirmModalPhone";
import ConfirmModalLaunch from "./ConfirmModalLaunch";
import ConfirmModalFooter from "./ConfirmModalFooter";

const ConfirmModalContent = ({
  toggleModal,
  toggleWaitingModal,
  initialValues,
  values
}) => (
  <div className="confirm-modal">
    {/* Modal header */}
    <ConfirmModalHeader />

    <div className="confirm-modal__list">
      {/* Modal store username */}
      <ConfirmModalUsername initialValues={initialValues} values={values} />

      {/* Modal phone number */}
      <ConfirmModalPhone initialValues={initialValues} values={values} />

      {/* Modal launch */}
      <ConfirmModalLaunch />
    </div>

    {/* Modal confirm footer */}
    <ConfirmModalFooter
      toggleModal={toggleModal}
      toggleWaitingModal={toggleWaitingModal}
    />
  </div>
);

export default ConfirmModalContent;
