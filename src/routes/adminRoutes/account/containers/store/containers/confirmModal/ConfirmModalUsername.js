import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";

const ConfirmModalUsername = ({ initialValues, values }) => (
  <>
    {/* If username is not the same as initial username */}
    {initialValues.storeUsername !== values.storeUsername && (
      <div className="confirm-modal__item">
        {/* Modal icon */}
        <div className="confirm-modal__icon">
          <Icon icon={iosWorld} size={"100%"} />
        </div>

        {/* Modal description */}
        <p className="is-marginless">
          Your new website address will be: <br />
          <span className="title is-size-6">
            {values.storeUsername}.withfinn.shop
          </span>
        </p>
      </div>
    )}
  </>
);

export default ConfirmModalUsername;
