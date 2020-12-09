import React from "react";

// Import components
import DomainDnsStepsItem from "./DomainDnsStepsItem";

const DomainDnsStepTwo = ({ domainName }) => (
  <DomainDnsStepsItem number={2} title={"Find your DNS settings"}>
    {/* Description */}
    <p className="has-text-grey-light is-marginless">
      The DNS settings may be on a different page for you but here's a general
      path to guide you.
    </p>

    {/* Card path */}
    <div className="domain-dns__card">
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
    </div>
  </DomainDnsStepsItem>
);

export default DomainDnsStepTwo;
