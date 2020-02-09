import React from "react";

const OptionsPopoverLinks = ({
  item,
  toggleDeleteModal,
  history,
  storeUsername
}) => (
  <>
    {/* Preview link */}
    <div className="options-popover__row">
      <h5 className="is-marginless is-size-6">Preview</h5>
    </div>

    {/* Edit link */}
    <div
      onClick={() =>
        history.push(`/${storeUsername}/admin/products/edit/${item.id}`)
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
