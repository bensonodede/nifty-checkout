import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Breakpoint } from "react-socks";

// Import Components
import { BottomModal, CenterModal } from "components/modal";
import { SuccessToast, ErrorToast } from "components/toast";
import WaitingModalMobileContent from "./WaitingModalMobileContent";
import WaitingModalDesktopContent from "./WaitingModalDesktopContent";

// Import functions
import editStoreMutation from "../../utils";

// Import styles
import "./styles.scss";

const WaitingModal = ({ isOpen, id, values, history }) => {
  // Destructure edit store mutation
  const { error, data, _editStoreMutation } = editStoreMutation();

  // Percentage loaded state
  const [percentageLoading, setPercentageLoading] = useState(0);

  // Run mutation on modal open
  useEffect(() => {
    if (isOpen) {
      _editStoreMutation({ ...values, ...{ id } });
    }
  }, [isOpen]);

  // On successful update
  if (data) {
    let { storeUsername } = data.updateStoreInfo;

    // Redirect to profile page
    setTimeout(() => {
      history.push(`/${storeUsername}/admin/profile`);
    }, 2000);
  }

  // Progress loader function
  if (isOpen) {
    setTimeout(() => {
      if (percentageLoading < 95 && !error) {
        setPercentageLoading(percentageLoading + 1);
      }

      // Set loader to 100%
      if (data) {
        setPercentageLoading(100);
      }
    }, 1200);
  }

  return (
    <>
      {/* Mobile modal */}
      <Breakpoint mobile only>
        <BottomModal isOpen={isOpen} toggleModal={null}>
          <WaitingModalMobileContent percentageLoading={percentageLoading} />
        </BottomModal>
      </Breakpoint>

      {/* Tablet and Desktop modal */}
      <Breakpoint tablet up>
        <CenterModal isOpen={isOpen} toggleModal={null}>
          <WaitingModalDesktopContent percentageLoading={percentageLoading} />
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
