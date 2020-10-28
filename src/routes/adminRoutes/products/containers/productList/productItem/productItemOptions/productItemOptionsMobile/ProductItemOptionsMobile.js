import React, { useContext } from "react";

// Import components
import { Icon } from "react-icons-kit";
import { androidMoreVertical } from "react-icons-kit/ionicons/androidMoreVertical";
import OptionsModal from "./optionsModal";
import DeleteModal from "./deleteModal";
import ProductListDeleteContext from "../../../ProductListDeleteContext";

// Import hooks
import { useModal } from "components/modal";

// Import styles
import "./styles.scss";

const ProductItemOptionsMobile = ({ item }) => {
  // Destructure hook methods
  const [isOptionsOpen, toggleOptionsModal] = useModal(false);
  const [isDeleteOpen, toggleDeleteModal] = useModal(false);

  // Destructure product delete context
  const { deleteMutation, deleteMutationProps } = useContext(
    ProductListDeleteContext
  );

  // Destructure mutation props
  let { loading: mutationLoading } = deleteMutationProps;

  return (
    <>
      {/* Options button */}
      <button
        type={"button"}
        onClick={(event) => {
          event.stopPropagation();
          toggleOptionsModal();
        }}
        className="product-item-options-mobile__btn"
      >
        <Icon
          size={"100%"}
          icon={androidMoreVertical}
          className="product-item-options-mobile__icon"
        />
      </button>

      {/* Options modal */}
      <OptionsModal
        item={item}
        isOptionsOpen={isOptionsOpen}
        toggleOptionsModal={toggleOptionsModal}
        toggleDeleteModal={toggleDeleteModal}
      />

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

export default ProductItemOptionsMobile;
