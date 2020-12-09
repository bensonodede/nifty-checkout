import React from "react";
import moment from "moment";

// Import components
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

const DomainActiveList = ({ domain: { expiryDate, registrarUrl } }) => (
  <>
    {/* Domain status */}
    <div className="domain-active__item">
      <h1 className="domain-active__item-title title is-size-7">STATUS</h1>
      <div className="domain-active__row">
        <Icon size="100%" icon={checkmark} className="domain-active__icon" />
        <h5 className="has-text-grey-darker is-size-6 is-marginless">
          Connected
        </h5>
      </div>
    </div>

    {/*  */}
    <div className="domain-active__item">
      <h1 className="domain-active__item-title title is-size-7">EXPIRY DATE</h1>
      <h5 className="has-text-grey-darker is-size-6 is-marginless">
        {moment(expiryDate).format("MMM Do YYYY")}
      </h5>
    </div>

    {/*  */}
    <div className="domain-active__item">
      <h1 className="domain-active__item-title title is-size-7">
        REGISTERED AT
      </h1>
      <h5
        className="has-text-grey-darker is-size-6 is-marginless domain-active__link"
        onClick={() => window.open(registrarUrl, "_blank")}
      >
        {registrarUrl}
      </h5>
    </div>
  </>
);

export default DomainActiveList;
