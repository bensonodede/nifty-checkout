import React from "react";
import { Helmet } from "react-helmet";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import { SuccessToast, ErrorToast } from "components/toast";
import { PageLoader } from "components/loader";

import DomainAddHeader from "./DomainAddHeader";
import DomainAddForm from "./DomainAddForm";

// Import gql operations
import { DOMAIN_QUERY } from "components/graphql/query";
import { CREATE_DOMAIN } from "components/graphql/mutation";

// Import styles
import "./styles.scss";

const DomainAdd = ({ match, history }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  // Query domain
  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(DOMAIN_QUERY, {
    variables: { storeUsername },
    fetchPolicy: "network-only",
  });

  // Create domain mutation
  const [mutate, { loading, error, data }] = useMutation(CREATE_DOMAIN);

  // Query loading
  if (queryLoading) {
    return <PageLoader />;
  }

  // Query error
  if (queryError) {
    return <ErrorToast text={"No internet connection"} emoji={"😿"} />;
  }

  // Destructure domain data
  let { domain } = queryData;

  // If domain already exists
  if (domain) {
    // If domain is verified, Redirect to domain active page
    if (domain.verified) {
      return <Redirect to={`/${storeUsername}/admin/account/domain`} />;
    }
    // If domain is NOT verified, Redirect to domain DNS page
    else {
      return <Redirect to={`/${storeUsername}/admin/account/domain/dns`} />;
    }
  }

  // On mutation success, Redirect to domain dns page
  if (data) {
    setTimeout(() => {
      history.push(`/${storeUsername}/admin/account/domain/dns`);
    }, 1500);
  }

  return (
    <>
      {/* Page title */}
      <Helmet title={`Add a domain · ${storeUsername}`} defer={false} />

      {/* Add domain page */}
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
                {/* Add domain header */}
                <DomainAddHeader />

                {/* Add domain form */}
                <DomainAddForm
                  mutate={mutate}
                  loading={loading}
                  storeUsername={storeUsername}
                />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>

      {/* Success mutation toast */}
      {data && <SuccessToast text={"Domain added"} emoji={"👍"} />}

      {/* Error toast */}
      {error && (
        <>
          {/* Graphql error */}
          {error.graphQLErrors[0] && (
            <ErrorToast text={error.graphQLErrors[0].message} emoji={"😕"} />
          )}

          {/* Network error */}
          {error.networkError && (
            <ErrorToast text={"No internet connection"} emoji={"😿"} />
          )}
        </>
      )}
    </>
  );
};

export default DomainAdd;
