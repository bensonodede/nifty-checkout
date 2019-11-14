import React from "react";

// Import components
import { Popover } from "components/popover";

// Import styles
import "./styles.scss";

// Popover content
const content = toggleDeleteModal => (
  <>
    {/* Preview */}
    <div className="options-popover__row">
      <h5 className="is-marginless is-size-6">Preview</h5>
    </div>

    {/* Edit */}
    <div className="options-popover__row">
      <h5 className="is-marginless is-size-6">Edit</h5>
    </div>

    {/* Delete */}
    <div onClick={toggleDeleteModal} className="options-popover__row">
      <h5 className="is-marginless is-size-6">Delete</h5>
    </div>
  </>
);

// Options popover
const OptionsPopover = ({
  show,
  onClickOutside,
  children,
  toggleDeleteModal
}) => {
  return (
    <>
      {/*  */}
      <Popover
        show={show}
        position={"bottom"}
        content={() => content(toggleDeleteModal)}
        popoverClass={"options-popover"}
        onClickOutside={onClickOutside}
      >
        {children}
      </Popover>

      {/*  */}
    </>
  );
};
export default OptionsPopover;
