import React from "react";
import { Breakpoint } from "react-socks";

// Import components
import { BottomModal, CenterModal } from "components/modal";
import CreateStoreMobileContent from "./CreateStoreMobileContent";
import CreateStoreDesktopContent from "./CreateStoreDesktopContent";

const CreateStoreModal = ({ percentageLoading, isOpen }) => (
  <>
    {/* Mobile modal */}
    <Breakpoint mobile only>
      <BottomModal isOpen={isOpen} toggleModal={null}>
        <CreateStoreMobileContent percentageLoading={percentageLoading} />
      </BottomModal>
    </Breakpoint>

    {/* Tablet and desktop modal */}
    <Breakpoint tablet up>
      <CenterModal isOpen={isOpen} toggleModal={null}>
        <CreateStoreDesktopContent percentageLoading={percentageLoading} />
      </CenterModal>
    </Breakpoint>
  </>
);

export default CreateStoreModal;
