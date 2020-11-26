import React from "react";

// Import components
import DomainDnsHeader from "./DomainDnsHeader";
import DomainDnsSteps from "./DomainDnsSteps";
import DomainDnsFooter from "./DomainDnsFooter";

// Import styles
import "./styles.scss";

const DomainDns = ({ domain }) => (
  <>
    {/* Header */}
    <DomainDnsHeader domain={domain} />

    {/* Steps */}
    <DomainDnsSteps domain={domain} />

    {/* Footer */}
    <DomainDnsFooter />
  </>
);

export default DomainDns;
