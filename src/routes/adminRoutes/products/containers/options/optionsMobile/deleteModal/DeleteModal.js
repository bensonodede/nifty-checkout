import React from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withApollo } from "@apollo/react-hoc";
import { Mixpanel } from "components/mixpanel";

// Import components
import Button from "components/button";
import { BottomModal } from "components/modal";
import { SuccessToast, ErrorToast } from "components/toast";

// Import functions
import { deleteProductMutation, deleteProductCache } from "../../utils";

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
  const { storeUsername } = match.params;

  // Success state
  if (data) {
    // Handle mixpanel event
    Mixpanel.track("Deleted product");

    // Handle cache update after toast animation
    setTimeout(() => {
      deleteProductCache({ client, storeUsername, data });
    }, 1900);
  }

  return (
    <BottomModal isOpen={isDeleteOpen} toggleModal={toggleDeleteModal}>
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
          <Button
            onClick={() => _deleteProductMutation(id, imgUrl)}
            isLoading={loading}
            isLight
            className={"delete-modal__btn"}
          >
            Delete item
          </Button>

          {/* Cancel button */}
          <Button isOutline onClick={toggleDeleteModal}>
            Cancel
          </Button>
        </div>
        {/* End button row */}
      </div>

      {/* On mutation complete */}
      {data && <SuccessToast text={"Product deleted"} emoji={"✌"} />}

      {/* Error state */}
      {error && <ErrorToast text={"No internet connection"} emoji={"💩"} />}
    </BottomModal>
  );
};

export default compose(withApollo, withRouter)(DeleteModal);
