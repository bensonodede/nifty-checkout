import React from "react";

// Import components
import OptionsModal from "../optionsModal";
import DeleteModal from "../deleteModal";

import ProductItemInfo from "./ProductItemInfo";

// Import hooks
import { useModal } from "components/modal";

// Import styles
import "./styles.scss";

const ProductItem = ({ item }) => {
  // Destructure hook methods
  const [isOptionsOpen, toggleOptionsModal] = useModal(false);
  const [isDeleteOpen, toggleDeleteModal] = useModal(false);

  // Destructure props
  const { name, imgUrl, price } = item;

  return (
    <>
      <tr className="product-item-mobile" onClick={toggleOptionsModal}>
        {/* Mobile: Info cell */}
        <td>
          <ProductItemInfo name={name} imgUrl={imgUrl} price={price} />
        </td>
      </tr>

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
      />
    </>
  );
};

export default ProductItem;
