import React from "react";
// import { Mutation } from "react-apollo";
import { BottomModal } from "../../modal";

//
import "./styles.css";

const DeleteModal = props => {
  let { name, id } = props.location.state;
  // let { storeName } = props.match.params;

  return (
    <BottomModal {...props.history}>
      <div>
        <div className="product-modal__header">
          <p className="product-modal__header-text">{name}</p>
        </div>

        {/* Product modal content */}
        <div className="product-modal__content">
          {/* Delete confirmation text */}
          <div>
            <p>Are you sure you want to delete this product?</p>
          </div>

          {/* Button row */}
          <div className="product-modal__row">
            <div className="product-modal__btn">
              <p>Delete</p>
            </div>

            {/* Cancel button */}
            <div className="product-modal__btn" onClick={props.history.goBack}>
              <p>Cancel</p>
            </div>
          </div>
          {/* End button row */}
        </div>
      </div>
    </BottomModal>
  );
};
export default DeleteModal;
