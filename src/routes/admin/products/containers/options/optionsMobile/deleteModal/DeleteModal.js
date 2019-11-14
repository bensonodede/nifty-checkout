import React from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withApollo } from "@apollo/react-hoc";
import { Mixpanel } from "components/mixpanel";

// Import components
import { Modal } from "components/modal";
import { SuccessToast, ErrorToast } from "components/toast";

// Import functions
import deleteProductMutation from "./deleteProductMutation";
import deleteProductCache from "./deleteProductCache";

// Import styles
import "./styles.scss";

const DeleteModal = ({
  item,
  isDeleteOpen,
  toggleDeleteModal,
  client,
  match
}) => {
  // Destructure delete function
  const {
    loading,
    error,
    data,
    _deleteProductMutation
  } = deleteProductMutation();

  // Destructure props
  const { id, imgUrl } = item;
  const { storeName } = match.params;

  // Success state
  if (data) {
    // Handle mixpanel event
    Mixpanel.track("Deleted product");

    // Handle cache update after toast animation
    setTimeout(() => {
      deleteProductCache({ client, storeName, data });
    }, 2000);
  }

  return (
    <Modal isOpen={isDeleteOpen} toggleModal={toggleDeleteModal}>
      <div className="delete-modal">
        {/* Delete confirmation text */}
        <div className="content">
          <h5 className="title is-size-5 is-marginless">Delete item</h5>
          <p className="is-size-6">
            Are you sure you want to delete this item? This action is permanent
            and cannot be reversed.
          </p>
        </div>

        {/* Button row */}
        <div className="delete-modal__row">
          {/* Delete button */}
          <button
            onClick={() => _deleteProductMutation(id, imgUrl)}
            className={`button is-primary delete-modal__btn
            ${loading ? `is-loading` : ``}
            `}
          >
            Delete item
          </button>

          {/* Cancel button */}
          <button onClick={toggleDeleteModal} className="button">
            Cancel
          </button>
        </div>
        {/* End button row */}
      </div>

      {/* On mutation complete */}
      {data && (
        <SuccessToast
          text={"Product deleted"}
          emoji={require("images/victory-hand-sign_emoji.png")}
        />
      )}

      {/* Error state */}
      {error && <ErrorToast text={"No internet connection"} />}
    </Modal>
  );
};

export default compose(withApollo, withRouter)(DeleteModal);
