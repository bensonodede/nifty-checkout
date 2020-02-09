import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Breakpoint } from "react-socks";

// Import Components
import { BottomModal, CenterModal } from "components/modal";
import WaitingModalContent from "./WaitingModalContent";
import { SuccessToast, ErrorToast } from "components/toast";

// Import functions
import editStoreMutation from "../../utils";

// Import styles
import "./styles.scss";

const WaitingModal = ({ isOpen, id, values, history }) => {
  const { error, data, _editStoreMutation } = editStoreMutation();

  useEffect(() => {
    if (isOpen) {
      _editStoreMutation({ ...values, ...{ id } });
    }
  }, [isOpen]);

  if (data) {
    let { storeUsername } = data.updateStoreInfo;
    setTimeout(() => {
      history.push(`/${storeUsername}/admin/profile`);
    }, 2000);
  }

  return (
    <>
      {/* Mobile modal */}
      <Breakpoint mobile only>
        <BottomModal isOpen={isOpen} toggleModal={null}>
          <WaitingModalContent />
        </BottomModal>
      </Breakpoint>

      {/* Tablet and Desktop modal */}
      <Breakpoint tablet up>
        <CenterModal isOpen={isOpen} toggleModal={null}>
          <WaitingModalContent />
        </CenterModal>
      </Breakpoint>

      {/* Error message */}
      {error && <ErrorToast text={"No internet connection"} emoji={"💩"} />}

      {/* Success message */}
      {data && <SuccessToast text={"Store updated"} emoji={"👌"} />}
    </>
  );
};

export default withRouter(WaitingModal);
