import React from "react";
import { withRouter, Link } from "react-router-dom";

// Import components
import { Modal } from "components/modal";
import { Icon } from "react-icons-kit";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import { ic_edit } from "react-icons-kit/md/ic_edit";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";

// Import styles
import "./styles.scss";

const OptionsModal = ({
  isOptionsOpen,
  toggleOptionsModal,
  toggleDeleteModal,
  item,
  match
}) => {
  // Destructure props
  let { name, id, imgUrl, price, humanId } = item;
  let { storeName } = match.params;

  return (
    <Modal isOpen={isOptionsOpen} toggleModal={toggleOptionsModal}>
      <div>
        {/* Options-modal header */}
        <div className="options-modal__header">
          <img src={imgUrl} alt={name} className="options-modal__img" />
          <div className="options-modal__content">
            <h5 className="is-size-6 is-marginless">{name}</h5>
          </div>
        </div>

        {/* Product modal content */}
        <div className="options-modal__body">
          {/* View in checkout link  */}
          <Link to={`/${storeName}/${humanId}`}>
            <div className="options-modal__row">
              <div className="options-modal__icon-container">
                <div className="options-modal__icon">
                  <Icon icon={ic_remove_red_eye} size={"100%"} />
                </div>
              </div>
              <div className="options-modal__content">
                <h5 className="is-marginless is-size-6">Preview</h5>
              </div>
            </div>
          </Link>

          {/* Edit product link  */}
          <Link
            to={{
              pathname: `/${storeName}/dashboard/${id}/edit`,
              state: { name, imgUrl, price }
            }}
          >
            <div className="options-modal__row">
              <div className="options-modal__icon-container">
                <div className="options-modal__icon">
                  <Icon icon={ic_edit} size={"100%"} />
                </div>
              </div>
              <div className="options-modal__content">
                <h5 className="is-marginless is-size-6">Edit</h5>
              </div>
            </div>
          </Link>

          {/* Delete product link */}
          <div
            onClick={() => {
              //
              toggleOptionsModal();
              //
              toggleDeleteModal();
            }}
          >
            <div className="options-modal__row">
              <div className="options-modal__icon-container">
                <div className="options-modal__icon">
                  <Icon icon={ic_delete} size={"100%"} />
                </div>
              </div>
              <div className="options-modal__content">
                <h5 className="is-marginless is-size-6">Delete</h5>
              </div>
            </div>
          </div>
          {/* End Delete product link */}
        </div>
        {/* End product modal content  */}
      </div>
    </Modal>
  );
};

export default withRouter(OptionsModal);
