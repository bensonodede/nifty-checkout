import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import { Popover } from "components/popover";
import OptionsPopoverLinks from "./OptionsPopoverLinks";

// Import styles
import "./styles.scss";

// Options popover
const OptionsPopover = ({
  show,
  onClickOutside,
  children,
  toggleDeleteModal,
  item,
  history,
  match
}) => {
  // Destructure store params
  let { storeUsername } = match.params;

  return (
    <Popover
      show={show}
      position={"bottom"}
      content={() =>
        OptionsPopoverLinks({ toggleDeleteModal, item, history, storeUsername })
      }
      popoverClass={"options-popover"}
      onClickOutside={onClickOutside}
    >
      {children}
    </Popover>
  );
};

export default withRouter(OptionsPopover);
