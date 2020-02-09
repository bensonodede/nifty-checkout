import React from "react";

// Import components
import OptionsPopover from "./optionsPopover";
import DeleteModal from "./deleteModal";
import { Icon } from "react-icons-kit";
import { ic_more_horiz } from "react-icons-kit/md/ic_more_horiz";

// Import hooks
import { usePopover } from "components/popover";
import { useModal } from "components/modal";

const OptionsDesktop = ({ data }) => {
  // Destructure hooks
  const [show, togglePopover] = usePopover(false);
  const [isDeleteOpen, toggleDeleteModal] = useModal(false);

  return (
    <>
      {/* Options popover */}
      <OptionsPopover
        show={show}
        onClickOutside={togglePopover}
        toggleDeleteModal={toggleDeleteModal}
        item={data}
      >
        <div onClick={togglePopover} className="product-item__icon-container">
          <div className="product-item__icon">
            <Icon icon={ic_more_horiz} size={"100%"} />
          </div>
        </div>
      </OptionsPopover>

      {/* Delete modal */}
      <DeleteModal
        item={data}
        isDeleteOpen={isDeleteOpen}
        toggleDeleteModal={toggleDeleteModal}
      />
    </>
  );
};
export default OptionsDesktop;
