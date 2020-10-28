import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

// Import styles
import "./styles.scss";

const Tooltip = forwardRef(({ children, text, placement = "bottom" }, ref) => (
  <Tippy
    reference={ref}
    placement={placement}
    content={text}
    arrow={false}
    touch={false}
    animation={"fade"}
    theme={"light-tooltip"}
  >
    {children}
  </Tippy>
));

export default Tooltip;
