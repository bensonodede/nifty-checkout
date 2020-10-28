import React from "react";
import slug from "slug";

const OptionsPopoverLinks = ({
  item: { id, name },
  toggleDeleteModal,
  toggleOptionsPopover,
  history,
  storeUsername,
}) => (
  <>
    {/* Preview link in new window */}
    <div
      onClick={(event) => {
        event.stopPropagation();
        window.open(
          `https://${storeUsername}.withfinn.shop/product/${slug(name)}-${id}`
        );
      }}
      className="options-popover__row"
    >
      <h5 className="is-marginless is-size-6">Preview</h5>
    </div>

    {/* Edit link */}
    <div
      onClick={(event) => {
        event.stopPropagation();
        history.push(`/${storeUsername}/admin/products/edit/${id}`);
      }}
      className="options-popover__row"
    >
      <h5 className="is-marginless is-size-6">Edit </h5>
    </div>

    {/* Delete link */}
    <div
      onClick={(event) => {
        event.stopPropagation();
        toggleDeleteModal();
        toggleOptionsPopover();
      }}
      className="options-popover__row"
    >
      <h5 className="is-marginless is-size-6">Delete</h5>
    </div>
  </>
);

export default OptionsPopoverLinks;
