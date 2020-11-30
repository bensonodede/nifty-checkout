import React from "react";
import { Helmet } from "react-helmet";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { withRouter, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import Button from "components/button";
import { PageLoader } from "components/loader";
import { ErrorToast, SuccessToast } from "components/toast";

// Import graphql operations
import { DOMAIN_QUERY } from "components/graphql/query";
import { DELETE_DOMAIN } from "components/graphql/mutation";

// Import styles
import "./styles.scss";

const DomainActive = ({ match, history }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  // Delete domain mutation
  const [
    deleteMutation,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_DOMAIN);

  // Query domain
  const { loading, error, data } = useQuery(DOMAIN_QUERY, {
    variables: { storeUsername },
    fetchPolicy: "network-only",
  });

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error) {
    return <ErrorToast emoji={"💩"} text={"No internet connection"} />;
  }

  console.log(data);

  // Destrucure data
  let { domain } = data;

  // If domain does not exist redirect to add domain
  if (!domain) {
    return <Redirect to={`/${storeUsername}/admin/account/domain/add`} />;
  }

  // If domain exists but is not verified
  if (!domain.verified) {
    return <Redirect to={`/${storeUsername}/admin/account/domain/dns`} />;
  }

  // On delete, redirect to account page
  if (deleteData) {
    setTimeout(() => {
      history.push(`/${storeUsername}/admin/account`);
    }, 1500);
  }

  let { domainName } = data.domain;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Domain · ${storeUsername}`} defer={false} />

      {/* Domain DNS page */}
      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={"fadeUp"}
        timeout={300}
      >
        <div className="route-wrapper">
          <div className="container">
            <div className="columns is-mobile is-multiline is-centered">
              <div className="column is-10-mobile is-6-tablet is-4-desktop">
                {/*  */}
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
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>

      {/* Success delete mutation toast */}
      {deleteData && <SuccessToast text={"Domain removed"} emoji={"✌"} />}

      {/* Error delete mutation toast*/}
      {deleteError && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </>
  );
};

export default withRouter(DomainActive);
