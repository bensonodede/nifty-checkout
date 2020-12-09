import React from "react";

const DomainDnsStepsItem = ({ number, title, children }) => (
  <div className="domain-dns__step">
    {/* Header */}
    <div className="domain-dns__step-header">
      <div className="domain-dns__step-header-number-wrapper">
        <h5 className="domain-dns__step-header-number is-marginless">
          {number}
        </h5>
      </div>
      <h5 className="is-marginless is-size-6">{title}</h5>
    </div>

    {/* Content */}
    {children}
  </div>
);

export default DomainDnsStepsItem;
