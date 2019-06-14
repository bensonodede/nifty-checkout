import React from "react";
import { Link } from "react-router-dom";
// Import components

import { BottomModal } from "../../modal";
import { Icon } from "react-icons-kit";
import { iosEye } from "react-icons-kit/ionicons/iosEye";
import { iosComposeOutline } from "react-icons-kit/ionicons/iosComposeOutline";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";

// Product modal component
const ProductModal = props => {
  let { name, id, imgUrl, price } = props.location.state.item;
  let { storeName } = props.match.params;
  return (
    <BottomModal {...props.history}>
      <div>
        {/* Product modal header */}
        <div className="product-modal__header">
          <p className="product-modal__header-text">{name}</p>
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
          <Link
            to={{
              pathname: `/${storeName}/products/${id}/edit`,
              state: { modal: false, name, imgUrl, price }
            }}
            className="product-modal__row"
          >
            <div className="product-modal__icon">
              <Icon
                icon={iosComposeOutline}
                size={"100%"}
                style={{ color: "#484848" }}
              />
            </div>
            <p className="product-modal__text">Edit</p>
          </Link>

          {/* Delete product link */}
          <Link
            className="product-modal__row"
            to={{
              pathname: `/${storeName}/products/${id}/delete`,
              state: { modal: true, id, name, imgUrl }
            }}
          >
            <div className="product-modal__icon">
              <Icon
                icon={iosTrashOutline}
                size={"100%"}
                style={{ color: "#484848" }}
              />
            </div>
            <p className="product-modal__text">Delete</p>
          </Link>
        </div>
        {/* End product modal content  */}
      </div>
    </BottomModal>
  );
};

export default ProductModal;
