import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/react-hooks";

// Import components
import { PageLoader } from "components/loader";
import { DomainForm, DomainDns } from "./containers";

// Import graphql operations
import { DOMAIN_QUERY } from "components/graphql/query";
import { ErrorToast } from "components/toast";

const Domain = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  const { loading, error, data } = useQuery(DOMAIN_QUERY, {
    variables: { storeUsername },
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

  return (
    <>
      {/* Page title */}
      <Helmet title={`Custom domain · ${storeUsername}`} defer={false} />

      {/* Domain page */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              {domain ? <DomainDns domain={domain} /> : <DomainForm />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
