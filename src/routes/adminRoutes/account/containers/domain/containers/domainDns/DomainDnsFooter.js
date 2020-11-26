import React from "react";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { close } from "react-icons-kit/ionicons/close";

const DomainDnsFooter = () => (
  <div>
    {/*  */}
    <div className="domain-dns__footer-error">
      <Icon
        size="100%"
        icon={close}
        className="domain-dns__footer-error-icon"
      />
      <h5 className="is-size-6 is-marginless domain-dns__footer-error-text">
        Not configured
      </h5>
    </div>

    {/*  */}
    <p className="has-text-grey-light">
      Please note: It may take up to 48hrs for the changes to take effect
    </p>

    {/*  */}
    <Button isFullWidth>Refresh</Button>
    <Button isFullWidth isOutline>
      Remove domain
    </Button>
  </div>
);

export default DomainDnsFooter;
