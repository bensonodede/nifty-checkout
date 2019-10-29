import React from "react";

// Import components
import { Popover } from "../../../popover";

// Import styles
import "./styles.scss";

// Popover content
const content = () => (
  <div>
    {/*  */}
    <div className="options-popover__row">
      <h5 className="is-marginless is-size-6">Preview</h5>
    </div>

    {/*  */}
    <div className="options-popover__row">
      <h5 className="is-marginless is-size-6">Edit</h5>
    </div>

    {/*  */}
    <div className="options-popover__row">
      <h5 className="is-marginless is-size-6">Delete</h5>
    </div>
  </div>
);

// Options popover
const OptionsPopover = ({ show, onClickOutside, children }) => (
  <Popover
    show={show}
    position={"bottom"}
    content={content}
    popoverClass={"options-popover"}
    onClickOutside={onClickOutside}
  >
    {children}
  </Popover>
);

export default OptionsPopover;
