import React from "react";

// Import components
import DomainDnsStepsItem from "./DomainDnsStepsItem";
import DomainDnsTable from "./DomainDnsTable";
import { Icon } from "react-icons-kit";
import { iosArrowRight } from "react-icons-kit/ionicons/iosArrowRight";

const DomainDnsSteps = ({ domain: { domainName, registrarUrl } }) => {
  return (
    <>
      {/* Step 1 */}
      <DomainDnsStepsItem number={1} title={"Log in to your domain provider"}>
        <p className="has-text-grey-light">
          Your seem to have purchased your domain from{" "}
          <a
            className="domain-dns__step-link has-text-primary"
            href={registrarUrl}
            target={"_blank"}
          >
            {registrarUrl}
          </a>
          .
          <br />
          <br />
          Log in to your domain provider and continue to the next step.{" "}
          <span role="img" aria-label={"emoji"}>
            👇
          </span>
        </p>
      </DomainDnsStepsItem>

      {/* Step 2 */}
      <DomainDnsStepsItem number={2} title={"Copy and paste the values"}>
        <p className="has-text-grey-light">
          Locate the <span>DNS settings</span>
          <br />
          My domains {">"} {domainName} {">"} Manage DNS
        </p>

        <DomainDnsTable />
      </DomainDnsStepsItem>

      {/* Step 3 */}
      <DomainDnsStepsItem number={3} title={"Verify that everything is set up"}>
        <p className="has-text-grey-light">
          Your seem to have bought your domain from namecheap.com
        </p>
      </DomainDnsStepsItem>
    </>
  );
};

export default DomainDnsSteps;
