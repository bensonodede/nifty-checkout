import React from "react";

// Import components
import DomainDnsStepOne from "./DomainDnsStepOne";
import DomainDnsStepTwo from "./DomainDnsStepTwo";
import DomainDnsStepThree from "./DomainDnsStepThree";
import DomainDnsStepFour from "./DomainDnsStepFour";

const DomainDnsSteps = ({ domain }) => {
  // Destructure domain
  let { domainName, registrarUrl } = domain;

  return (
    <>
      {/* Step 1 */}
      <DomainDnsStepOne registrarUrl={registrarUrl} />

      {/* Step 2 */}
      <DomainDnsStepTwo domainName={domainName} />

      {/* Step 3 */}
      <DomainDnsStepThree />

      {/* Step 4 */}
      <DomainDnsStepFour domainName={domainName} />
    </>
  );
};

export default DomainDnsSteps;
