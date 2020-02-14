import React from "react";

const OptionsPopoverLinks = ({
  item: { id, humanId },
  toggleDeleteModal,
  history,
  storeUsername
}) => (
  <>
    {/* Preview link */}
    <div
      onClick={() =>
        window.open(`https://${storeUsername}.magicfinn.com/product/${humanId}`)
      }
      className="options-popover__row"
    >
      <h5 className="is-marginless is-size-6">Preview</h5>
    </div>

    {/* Edit link */}
    <div
      onClick={() =>
        history.push(`/${storeUsername}/admin/products/edit/${id}`)
      }
      className="options-popover__row"
    >
      <h5 className="is-marginless is-size-6">Edit </h5>
    </div>

    {/* Delete link */}
    <div onClick={toggleDeleteModal} className="options-popover__row">
      <h5 className="is-marginless is-size-6">Delete</h5>
    </div>
  </>
);

export default OptionsPopoverLinks;
