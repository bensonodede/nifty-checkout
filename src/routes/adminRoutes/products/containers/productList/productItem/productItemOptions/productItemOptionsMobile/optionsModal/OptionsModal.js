import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import { BottomModal } from "components/modal";

import OptionsModalHeader from "./OptionsModalHeader";
import {
  OptionsPreviewLink,
  OptionsEditLink,
  OptionsDeleteLink,
} from "./OptionsModalLinks";

// Import styles
import "./styles.scss";

const OptionsModal = ({
  isOptionsOpen,
  toggleOptionsModal,
  toggleDeleteModal,
  item,
  match,
}) => {
  // Destructure props
  let { name, id, imgUrls } = item;
  let { storeUsername } = match.params;

  return (
    <BottomModal
      isOpen={isOptionsOpen}
      toggleModal={(event) => {
        event.stopPropagation();
        toggleOptionsModal();
      }}
    >
      {/* Options-modal header */}
      <OptionsModalHeader imgUrl={imgUrls[0]} name={name} />

      <div className="options-modal__body">
        {/* View in checkout link  */}
        <OptionsPreviewLink storeUsername={storeUsername} name={name} id={id} />

        {/* Edit product link  */}
        <OptionsEditLink storeUsername={storeUsername} id={id} />

        {/* Delete product link */}
        <OptionsDeleteLink
          toggleOptionsModal={toggleOptionsModal}
          toggleDeleteModal={toggleDeleteModal}
        />
      </div>
    </BottomModal>
  );
};

export default withRouter(OptionsModal);
