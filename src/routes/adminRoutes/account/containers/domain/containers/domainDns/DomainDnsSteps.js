import React from "react";

// Import components
import DomainDnsStepsItem from "./DomainDnsStepsItem";
import DomainDnsTable from "./DomainDnsTable";
import { Icon } from "react-icons-kit";
import { iosArrowRight } from "react-icons-kit/ionicons/iosArrowRight";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";
import DomainDnsFooter from "./DomainDnsFooter";

const DomainDnsSteps = ({ domain }) => {
  // Destructure domain
  let { domainName, registrarUrl } = domain;

  return (
    <>
      {/* Step 1 */}
      <DomainDnsStepsItem number={1} title={"Log in to your domain provider"}>
        <p className="has-text-grey-light is-marginless">
          Log in to{" "}
          <a
            className="domain-dns__step-link has-text-primary"
            href={registrarUrl}
            target={"_blank"}
          >
            {registrarUrl}
          </a>{" "}
          and continue to the next step.
        </p>
      </DomainDnsStepsItem>

      {/* Step 2 */}
      <DomainDnsStepsItem number={2} title={"Find your DNS settings"}>
        <p className="has-text-grey-light is-marginless">
          The DNS settings may be on a different page for you but here's a
          general path to guide you.
        </p>
        <br />

        {/*  */}
        <h5 className="domain-dns__step-path is-size-6 is-marginless">
          My domains{" "}
          <span
            role="img"
            aria-label={"emoji"}
            className="domain-dns__step-point-emoji"
          >
            👉
          </span>
          {domainName}{" "}
          <span
            role="img"
            aria-label={"emoji"}
            className="domain-dns__step-point-emoji"
          >
            👉
          </span>
          Manage DNS
        </h5>
      </DomainDnsStepsItem>

      {/* Step 3 */}
      <DomainDnsStepsItem number={3} title={"Create a record"}>
        <DomainDnsTable />
      </DomainDnsStepsItem>

      {/* Step 4 */}
      <DomainDnsStepsItem number={4} title={"Verify that everything is set up"}>
        <DomainDnsFooter domain={domain} />
      </DomainDnsStepsItem>
    </>
  );
};

export default DomainDnsSteps;
