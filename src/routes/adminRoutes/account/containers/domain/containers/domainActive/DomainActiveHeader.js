import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { ic_open_in_new } from "react-icons-kit/md/ic_open_in_new";

const DomainActiveHeader = ({ domainName }) => (
  <div className="account__header">
    <a
      className="domain-dns__header"
      href={`https://${domainName}`}
      target={"_blank"}
    >
      <h1 className="domain-dns__header-title title is-size-3 is-marginless">
        {domainName}
      </h1>

      {/* New window icon */}
      <Icon
        size="100%"
        icon={ic_open_in_new}
        className="domain-dns__header-title-icon"
      />
    </a>
  </div>
);

export default DomainActiveHeader;
