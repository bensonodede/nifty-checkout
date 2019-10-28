import React from "react";
import TinyPopover from "react-tiny-popover";

const Popover = ({
  show,
  position,
  content,
  popoverClass,
  onClickOutside,
  children
}) => {
  return (
    <TinyPopover
      isOpen={show}
      align={"end"}
      position={position}
      content={content}
      containerClassName={popoverClass}
      onClickOutside={onClickOutside}
    >
      {children}
    </TinyPopover>
  );
};
export default Popover;
