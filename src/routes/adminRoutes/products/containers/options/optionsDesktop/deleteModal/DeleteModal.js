import React from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withApollo } from "@apollo/react-hoc";
import { Mixpanel } from "components/mixpanel";

// Import components
import Button from "components/button";
import { CenterModal } from "components/modal";
import { ErrorToast, SuccessToast } from "components/toast";

// Import styles
import "./styles.scss";

// Import functions
import { deleteProductMutation, deleteProductCache } from "../../utils";

const DeleteModal = ({
  item,
  isDeleteOpen,
  toggleDeleteModal,
  match,
  client
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
    }, 1950);
  }

  return (
    <CenterModal isOpen={isDeleteOpen} toggleModal={toggleDeleteModal}>
      <div className="delete-modal--desktop">
        {/* Delete confirmation text */}
        <div className="content">
          <h5 className="title is-size-5 is-marginless">Delete item</h5>
          <p className="is-size-6">
            Are you sure you want to delete this item? This action is permanent
            and cannot be reversed.
          </p>
        </div>

        {/* Button row */}
        <div className="delete-modal__row--desktop">
          {/* Delete button */}
          <Button
            onClick={() => _deleteProductMutation(id, imgUrl)}
            className={"delete-modal__btn"}
            isLoading={loading}
            isLight
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

      {/* Success state */}
      {data && <SuccessToast text={"Product deleted"} emoji={"✌"} />}

      {/* Error state */}
      {error && <ErrorToast text={"No internet connection"} emoji={"💩"} />}
    </CenterModal>
  );
};

export default compose(withApollo, withRouter)(DeleteModal);
