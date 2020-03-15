import React from "react";

// Import components
import OptionsPopover from "../optionsPopover";
import DeleteModal from "../deleteModal";

import ProductItemInfo from "./ProductItemInfo";
import ProductItemPrice from "./ProductItemPrice";
import ProductItemDate from "./ProductItemDate";

// Import hooks
import { usePopover } from "components/popover";
import { useModal } from "components/modal";

// Import styles
import "./styles.scss";

const ProductItem = ({ item }) => {
  // Destructure hooks
  const [show, togglePopover] = usePopover(false);
  const [isDeleteOpen, toggleDeleteModal] = useModal(false);

  // Destructure props
  const { name, imgUrl, price, updatedAt } = item;

  return (
    <>
      <OptionsPopover
        show={show}
        onClickOutside={togglePopover}
        toggleDeleteModal={toggleDeleteModal}
        item={item}
      >
        <tr className="product-item-desktop" onClick={togglePopover}>
          {/* Desktop: Info cell */}
          <td>
            <ProductItemInfo name={name} imgUrl={imgUrl} />
          </td>

          {/* Desktop: Price cell */}
          <td>
            <ProductItemPrice price={price} />
          </td>

          {/* Desktop: Last modified cell */}
          <td>
            <ProductItemDate updatedAt={updatedAt} />
          </td>
        </tr>
      </OptionsPopover>

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
