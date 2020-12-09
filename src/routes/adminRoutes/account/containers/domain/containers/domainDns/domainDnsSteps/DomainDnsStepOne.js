import React from "react";

// Import components
import DomainDnsStepsItem from "./DomainDnsStepsItem";

const DomainDnsStepOne = ({ registrarUrl }) => (
  <DomainDnsStepsItem number={1} title={"Log in to your domain provider"}>
    <p className="has-text-grey-light is-marginless">
      Log in to{" "}
      <a
        className="domain-dns__step-link has-text-primary is-size-6"
        href={registrarUrl}
        target={"_blank"}
      >
        {registrarUrl}
      </a>{" "}
      and continue to the next step.
    </p>
  </DomainDnsStepsItem>
);

export default DomainDnsStepOne;
