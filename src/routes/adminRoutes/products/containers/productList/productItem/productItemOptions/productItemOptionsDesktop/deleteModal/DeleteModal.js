import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import Button from "components/button";
import { CenterModal } from "components/modal";

// Import styles
import "./styles.scss";

const DeleteModal = ({
  item,
  isDeleteOpen,
  toggleDeleteModal,
  deleteMutation,
  loading,
}) => {
  // Destructure props
  const { id, imgUrls } = item;

  return (
    <CenterModal
      isOpen={isDeleteOpen}
      toggleModal={(e) => {
        e.stopPropagation();
        toggleDeleteModal();
      }}
    >
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
            onClick={() =>
              deleteMutation({
                variables: {
                  id,
                  imgUrls,
                },
              })
            }
            className={"delete-modal--desktop__btn"}
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
    </CenterModal>
  );
};

export default withRouter(DeleteModal);
