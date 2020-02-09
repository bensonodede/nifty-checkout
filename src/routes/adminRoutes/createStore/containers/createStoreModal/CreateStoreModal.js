import React from "react";
import { BottomModal, CenterModal } from "components/modal";
import { Breakpoint } from "react-socks";

// Import components
import CreateStoreMobileContent from "./CreateStoreMobileContent";
import CreateStoreDesktopContent from "./CreateStoreDesktopContent";

const CreateStoreModal = ({ isOpen }) => (
  <>
    {/* Mobile modal */}
    <Breakpoint mobile only>
      <BottomModal isOpen={isOpen} toggleModal={null}>
        <CreateStoreMobileContent />
      </BottomModal>
    </Breakpoint>

    {/* Tablet and desktop modal */}
    <Breakpoint tablet up>
      <CenterModal isOpen={isOpen} toggleModal={null}>
        <CreateStoreDesktopContent />
      </CenterModal>
    </Breakpoint>
  </>
);

export default CreateStoreModal;
