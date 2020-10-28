import React, { useContext, useRef } from "react";

// Import components
import { Icon } from "react-icons-kit";
import { androidMoreHorizontal } from "react-icons-kit/ionicons/androidMoreHorizontal";
import OptionsPopover from "./optionsPopover";
import DeleteModal from "./deleteModal";
import ProductListDeleteContext from "../../../ProductListDeleteContext";

// Import hooks
import { usePopover } from "components/popover";
import { useModal } from "components/modal";

// Import styles
import "./styles.scss";
import Tooltip from "components/tooltip";

const ProductItemOptionsDesktop = ({ item }) => {
  // Destructure hook methods
  const [show, toggleOptionsPopover] = usePopover(false);
  const [isDeleteOpen, toggleDeleteModal] = useModal(false);

  // Destructure product delete context
  const { deleteMutation, deleteMutationProps } = useContext(
    ProductListDeleteContext
  );

  // Destructure mutation props
  let { loading: mutationLoading } = deleteMutationProps;

  //
  const buttonRef = useRef();

  return (
    <>
      {/* Options button */}
      <OptionsPopover
        item={item}
        show={show}
        toggleOptionsPopover={toggleOptionsPopover}
        toggleDeleteModal={toggleDeleteModal}
      >
        <button
          ref={buttonRef}
          type={"button"}
          onClick={(event) => {
            event.stopPropagation();
            toggleOptionsPopover();
          }}
          className="product-item-options-desktop__btn"
        >
          <Icon
            size={"100%"}
            icon={androidMoreHorizontal}
            className="product-item-options-desktop__icon"
          />
        </button>
      </OptionsPopover>

      {/* Tooltip */}
      <Tooltip text={"Options"} ref={buttonRef} />

      {/* Delete modal */}
      <DeleteModal
        item={item}
        isDeleteOpen={isDeleteOpen}
        toggleDeleteModal={toggleDeleteModal}
        deleteMutation={deleteMutation}
        loading={mutationLoading}
      />
    </>
  );
};

export default ProductItemOptionsDesktop;
