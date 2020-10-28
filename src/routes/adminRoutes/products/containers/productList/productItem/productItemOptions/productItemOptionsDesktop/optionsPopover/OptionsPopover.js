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
  children,
  toggleOptionsPopover,
  toggleDeleteModal,
  item,
  history,
  match,
}) => {
  // Destructure store params
  let { storeUsername } = match.params;

  return (
    <Popover
      placement={"bottom-start"}
      content={
        <OptionsPopoverLinks
          toggleDeleteModal={toggleDeleteModal}
          toggleOptionsPopover={toggleOptionsPopover}
          item={item}
          history={history}
          storeUsername={storeUsername}
        />
      }
      show={show}
      togglePopover={toggleOptionsPopover}
    >
      {children}
    </Popover>
  );
};

export default withRouter(OptionsPopover);
