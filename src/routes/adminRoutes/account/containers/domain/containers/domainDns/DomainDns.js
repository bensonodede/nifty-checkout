import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/react-hooks";
import { withRouter, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";

import DomainDnsHeader from "./DomainDnsHeader";
import DomainDnsSteps from "./domainDnsSteps";

// Import graphql operations
import { DOMAIN_QUERY } from "components/graphql/query";

// Import styles
import "./styles.scss";

const DomainDns = ({ match, history }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  // Query domain
  const { loading, error, data } = useQuery(DOMAIN_QUERY, {
    variables: { storeUsername },
    fetchPolicy: "cache-and-network",
  });

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error) {
    return <ErrorToast emoji={"💩"} text={"No internet connection"} />;
  }

  // Destrucure data
  let { domain } = data;

  // If domain does not exist redirect to add domain
  if (!domain) {
    return <Redirect to={`/${storeUsername}/admin/account/domain/add`} />;
  }

  return (
    <>
      {/* Page title */}
      <Helmet title={`Configure domain · ${storeUsername}`} defer={false} />

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
                {/* Header */}
                <DomainDnsHeader domain={domain} />

                {/* Steps */}
                <DomainDnsSteps domain={domain} />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default withRouter(DomainDns);
