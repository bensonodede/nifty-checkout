import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { ic_open_in_new } from "react-icons-kit/md/ic_open_in_new";

const DomainDnsHeader = ({ domain: { domainName } }) => (
  <div className="account__header">
    {/* Title */}
    <a
      className="domain-dns__header"
      href={`https://${domainName}`}
      target={"_blank"}
    >
      <h1 className="domain-dns__header-title title is-size-3 is-marginless">
        {domainName}
      </h1>
      <Icon
        size="100%"
        icon={ic_open_in_new}
        className="domain-dns__header-title-icon"
      />
    </a>

    {/* Sub title */}
    <p>
      Follow these 4 simple steps to activate your domain.{" "}
      <span role="img" aria-label={"emoji"}>
        🙌
      </span>
    </p>
  </div>
);

export default DomainDnsHeader;
