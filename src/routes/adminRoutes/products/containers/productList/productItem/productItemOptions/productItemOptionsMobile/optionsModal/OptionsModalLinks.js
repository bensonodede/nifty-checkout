import React from "react";
import { Link } from "react-router-dom";
import slug from "slug";

// Import components
import { Icon } from "react-icons-kit";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import { ic_edit } from "react-icons-kit/md/ic_edit";
import { ic_delete } from "react-icons-kit/md/ic_delete";

const OptionsPreviewLink = ({ storeUsername, name, id }) => (
  <div
    onClick={() =>
      window.open(
        `https://${storeUsername}.withfinn.shop/product/${slug(name)}-${id}`
      )
    }
  >
    <div className="options-modal__row">
      {/* Options modal link icon */}
      <div className="options-modal__icon-container">
        <div className="options-modal__icon">
          <Icon icon={ic_remove_red_eye} size={"100%"} />
        </div>
      </div>

      {/* Options modal content */}
      <h5 className="options-modal__content is-size-6">Preview</h5>
    </div>
  </div>
);

const OptionsEditLink = ({ storeUsername, id }) => (
  <Link to={`/${storeUsername}/admin/products/edit/${id}`}>
    <div className="options-modal__row">
      {/* Options modal link icon */}
      <div className="options-modal__icon-container">
        <div className="options-modal__icon">
          <Icon icon={ic_edit} size={"100%"} />
        </div>
      </div>

      {/* Options modal content */}
      <h5 className="options-modal__content is-size-6">Edit</h5>
    </div>
  </Link>
);

const OptionsDeleteLink = ({ toggleOptionsModal, toggleDeleteModal }) => (
  <div
    onClick={() => {
      toggleOptionsModal();
      toggleDeleteModal();
    }}
    className="options-modal__row"
  >
    {/* Options modal link icon */}
    <div className="options-modal__icon-container">
      <div className="options-modal__icon">
        <Icon icon={ic_delete} size={"100%"} />
      </div>
    </div>

    {/* Options modal content */}
    <h5 className="options-modal__content is-size-6">Delete</h5>
  </div>
);

export { OptionsPreviewLink, OptionsEditLink, OptionsDeleteLink };
