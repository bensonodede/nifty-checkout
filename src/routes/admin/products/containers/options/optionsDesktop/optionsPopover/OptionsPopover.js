import React from "react";

// Import components
import { Popover } from "components/popover";

// Import styles
import "./styles.scss";

// Import options data
const data = require("../../options.json");

// Popover content
const content = () => (
  <div>
    {/* Popover items */}
    {data.map(item => (
      <div key={item.id} className="options-popover__row">
        <h5 className="is-marginless is-size-6">{item.name}</h5>
      </div>
    ))}
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
