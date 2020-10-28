import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import Button from "components/button";
import { BottomModal } from "components/modal";

// Import styles
import "./styles.scss";

const DeleteModal = ({
  item,
  isDeleteOpen,
  toggleDeleteModal,
  deleteMutation,
  loading,
  match,
}) => {
  // Destructure props
  const { id, imgUrls } = item;

  return (
    <BottomModal
      isOpen={isDeleteOpen}
      toggleModal={(event) => {
        event.stopPropagation();
        toggleDeleteModal();
      }}
    >
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
            onClick={() =>
              deleteMutation({
                variables: {
                  id,
                  imgUrls,
                },
              })
            }
            isLoading={loading}
            isLight
            isFullWidth
            className={"delete-modal__btn"}
          >
            Delete item
          </Button>

          {/* Cancel button */}
          <Button isOutline isFullWidth onClick={toggleDeleteModal}>
            Cancel
          </Button>
        </div>
        {/* End button row */}
      </div>

      {/* On mutation complete */}
      {/* {data && <SuccessToast text={"Product deleted"} emoji={"✌"} />} */}

      {/* Error state */}
      {/* {error && <ErrorToast text={"No internet connection"} emoji={"💩"} />} */}
    </BottomModal>
  );
};

export default withRouter(DeleteModal);
