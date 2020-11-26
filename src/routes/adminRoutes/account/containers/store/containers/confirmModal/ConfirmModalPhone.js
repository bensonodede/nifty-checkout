import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { iosTelephone } from "react-icons-kit/ionicons/iosTelephone";

const ConfirmModalPhone = ({ initialValues, values }) => (
  <>
    {initialValues.phoneNumber !== values.phoneNumber && (
      <div className="confirm-modal__item">
        {/* Modal icon */}
        <div className="confirm-modal__icon">
          <Icon icon={iosTelephone} size={"100%"} />
        </div>

        {/* Modal description */}
        <p className="is-marginless">
          Customers will reach you on this number and order notifications will
          be sent here:{" "}
          <span className="title is-size-6">+254 {values.phoneNumber}</span>
        </p>
      </div>
    )}
  </>
);

export default ConfirmModalPhone;
