import React from "react";

// Import components

import { BottomModal } from "../../overlay";
import { Icon } from "react-icons-kit";
import { iosEye } from "react-icons-kit/ionicons/iosEye";
import { iosComposeOutline } from "react-icons-kit/ionicons/iosComposeOutline";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";

// Product modal component
const ProductModal = props => (
  <BottomModal {...props}>
    <div>
      {/* Product modal header */}
      <div className="product-modal__header">
        <p className="product-modal__header-text">{props.name}</p>
      </div>

      {/* Product modal content  */}
      <div className="product-modal__content">
        {/* View in checkout link  */}
        <div className="product-modal__row">
          <div className="product-modal__icon">
            <Icon icon={iosEye} size={"100%"} style={{ color: "#484848" }} />
          </div>
          <p className="product-modal__text">View in checkout</p>
        </div>

        {/* Edit product link  */}
        <div className="product-modal__row">
          <div className="product-modal__icon">
            <Icon
              icon={iosComposeOutline}
              size={"100%"}
              style={{ color: "#484848" }}
            />
          </div>
          <p className="product-modal__text">Edit</p>
        </div>

        {/* Delete product link */}
        <div className="product-modal__row">
          <div className="product-modal__icon">
            <Icon
              icon={iosTrashOutline}
              size={"100%"}
              style={{ color: "#484848" }}
            />
          </div>
          <p className="product-modal__text">Delete</p>
        </div>
      </div>
      {/* End product modal content  */}
    </div>
  </BottomModal>
);

export default ProductModal;
