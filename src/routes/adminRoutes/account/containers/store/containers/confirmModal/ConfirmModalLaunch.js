import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { iosBolt } from "react-icons-kit/ionicons/iosBolt";

const ConfirmModalLaunch = () => (
  <div className="confirm-modal__item">
    {/* Modal icon */}
    <div className="confirm-modal__icon">
      <Icon icon={iosBolt} size={"100%"} />
    </div>

    {/* Modal description */}
    <p className="is-marginless">
      On pressing confirm, your store will be{" "}
      <span className="title is-size-6">updated</span> and{" "}
      <span className="title is-size-6">re-launched.</span>
    </p>
  </div>
);

export default ConfirmModalLaunch;
