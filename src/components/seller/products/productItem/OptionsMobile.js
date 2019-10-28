import React from "react";

// Import components
import OptionsModal from "../optionsModal";
import { Icon } from "react-icons-kit";
import { ic_more_horiz } from "react-icons-kit/md/ic_more_horiz";

// Import hooks
import { useModal } from "../../../modal";

const OptionsMobile = ({ data }) => {
  // Destructure hook methods
  const [isOpen, toggleModal] = useModal(false);

  return (
    <div onClick={toggleModal} className="product-item__icon-container">
      <div className="product-item__icon">
        <Icon icon={ic_more_horiz} size={"100%"} />
      </div>

      {/* Options modal */}
      <OptionsModal
        data={data}
        isOptionsOpen={isOpen}
        toggleModalOptions={toggleModal}
      />
    </div>
  );
};

export default OptionsMobile;
