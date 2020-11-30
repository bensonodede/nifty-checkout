import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { ic_open_in_new } from "react-icons-kit/md/ic_open_in_new";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

const DomainActiveHeader = () => (
  <div className="account__header">
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

    {/*  */}
    <div className="domain-active__row">
      <Icon size="100%" icon={checkmark} className="domain-active__icon" />
      <h5 className="is-size-6 is-marginless has-text-primary">Connected</h5>
    </div>
  </div>
);

export default DomainActiveHeader;
