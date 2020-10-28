import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

// Import styles
import "./styles.scss";

const Popover = ({
  children,
  content,
  placement = "bottom",
  show,
  togglePopover,
}) => (
  <Tippy
    duration={150}
    allowHTML={true}
    placement={placement}
    content={content}
    arrow={false}
    maxWidth={"none"}
    animation={"fade"}
    theme={"light-popover"}
    visible={show}
    onClickOutside={togglePopover}
    interactive={true}
  >
    {children}
  </Tippy>
);

export default Popover;
