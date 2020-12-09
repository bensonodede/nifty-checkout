import React from "react";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

// Import components
import Button from "components/button";
import { ErrorToast, SuccessToast } from "components/toast";
import { Icon } from "react-icons-kit";
import { close } from "react-icons-kit/ionicons/close";
import DomainDnsStepsItem from "./DomainDnsStepsItem";

// Import graphql operations
import { DELETE_DOMAIN, VERIFY_DOMAIN } from "components/graphql/mutation";

const DomainDnsStepFour = ({ match, history, domainName }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  // Delete domain
  const [
    deleteMutation,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_DOMAIN);

  // Verify domain
  const [
    verifyMutation,
    { loading: verifyLoading, error: verifyError, data: verifyData },
  ] = useMutation(VERIFY_DOMAIN);

  //
  if (verifyData) {
    if (verifyData.verifyDomain.verified) {
      setTimeout(() => {
        history.push(`/${storeUsername}/admin/account/domain`);
      }, 1500);
    }
  }

  // On delete, redirect to account page
  if (deleteData) {
    setTimeout(() => {
      history.push(`/${storeUsername}/admin/account`);
    }, 1500);
  }

  return (
    <DomainDnsStepsItem number={4} title={"Verify that everything is set up"}>
      {/* Card */}
      <div className="domain-dns__card">
        <h5 className="is-size-6 is-marginless">Keep in mind</h5>
        <p className="has-text-grey-light">
          We have to let the whole internet know that you have a shiny new
          website address.{" "}
          <span role="img" aria-label={"emoji"}>
            ✨
          </span>
          <br />
          <br />
          This may take up to 48hrs, please be patient if it doesn't connect
          immediately.{" "}
          <span role="img" aria-label={"emoji"}>
            🙏
          </span>
        </p>
      </div>

      {/* Not connected status */}
      <div className="domain-dns__footer-error">
        <Icon
          size="100%"
          icon={close}
          className="domain-dns__footer-error-icon"
        />
        <h5 className="is-size-6 is-marginless has-text-grey-darker">
          Not connected
        </h5>
      </div>

      {/* Verify button */}
      <Button
        className="domain-dns__footer-btn-verify"
        type={"button"}
        isFullWidth
        isLight
        isLoading={verifyLoading}
        isDisabled={verifyLoading}
        onClick={() =>
          verifyMutation({
            variables: {
              domainName,
            },
          })
        }
      >
        Verify connection
      </Button>

      {/* Remove button */}
      <Button
        className="domain-dns__footer-btn-remove"
        type={"button"}
        isFullWidth
        isOutline
        isLoading={deleteLoading}
        isDisabled={deleteLoading}
        onClick={() =>
          deleteMutation({
            variables: {
              storeUsername,
              domainName,
            },
          })
        }
      >
        Remove domain
      </Button>

      {/* Verified domain toast */}
      {verifyData && (
        <>
          {/* Verified domain */}
          {verifyData.verifyDomain.verified && (
            <SuccessToast text={"Domain connected"} emoji={"🎉"} />
          )}

          {/* Domain not verified */}
          {!verifyData.verifyDomain.verified && (
            <SuccessToast text={"Domain not connected"} emoji={"😅"} />
          )}
        </>
      )}

      {/* Success delete mutation toast */}
      {deleteData && <SuccessToast text={"Domain removed"} emoji={"✌"} />}

      {/* Error delete mutation toast*/}
      {(deleteError || verifyError) && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </DomainDnsStepsItem>
  );
};

export default withRouter(DomainDnsStepFour);
