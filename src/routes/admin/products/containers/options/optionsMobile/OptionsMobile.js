import React from "react";

// Import components
import OptionsModal from "./optionsModal";
import DeleteModal from "./deleteModal";
import { Icon } from "react-icons-kit";
import { ic_more_horiz } from "react-icons-kit/md/ic_more_horiz";

// Import hooks
import { useModal } from "components/modal";

const OptionsMobile = ({ data }) => {
  // Destructure hook methods
  const [isOptionsOpen, toggleOptionsModal] = useModal(false);
  const [isDeleteOpen, toggleDeleteModal] = useModal(false);

  return (
    <div onClick={toggleOptionsModal} className="product-item__icon-container">
      <div className="product-item__icon">
        <Icon icon={ic_more_horiz} size={"100%"} />
      </div>

      {/* Options modal */}
      <OptionsModal
        item={data}
        isOptionsOpen={isOptionsOpen}
        toggleOptionsModal={toggleOptionsModal}
        toggleDeleteModal={toggleDeleteModal}
      />

      {/* Delete modal */}
      <DeleteModal
        item={data}
        isDeleteOpen={isDeleteOpen}
        toggleDeleteModal={toggleDeleteModal}
      />
    </div>
  );
};

export default OptionsMobile;
