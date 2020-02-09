import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import { BottomModal } from "components/modal";

import OptionsModalHeader from "./OptionsModalHeader";
import {
  OptionsPreviewLink,
  OptionsEditLink,
  OptionsDeleteLink
} from "./OptionsModalLinks";

// Import styles
import "./styles.scss";

const OptionsModal = ({
  isOptionsOpen,
  toggleOptionsModal,
  toggleDeleteModal,
  item,
  match
}) => {
  // Destructure props
  let { name, id, imgUrl, humanId } = item;
  let { storeUsername } = match.params;

  return (
    <BottomModal isOpen={isOptionsOpen} toggleModal={toggleOptionsModal}>
      {/* Options-modal header */}
      <OptionsModalHeader imgUrl={imgUrl} name={name} />

      <div className="options-modal__body">
        {/* View in checkout link  */}
        <OptionsPreviewLink storeUsername={storeUsername} humanId={humanId} />

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
